"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, Timestamp, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

type Purchase = {
  id: string;
  date: Timestamp;
  btcPriceBRL: number;
  btcPriceUSD: number;
  amountBRL: number;
};

export default function BTCPage() {
  const [amount, setAmount] = useState<number>(150);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(false);

  // Busca as compras no Firestore
  const fetchPurchases = async () => {
    const q = query(collection(db, "purchases"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);

    const data: Purchase[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Purchase[];

    setPurchases(data);
  };

  useEffect(() => {
    fetchPurchases();
  }, []);

  // Salva nova compra
  const handleAddPurchase = async () => {
    try {
      setLoading(true);

      // Buscar preço do BTC
      const resBRL = await fetch("https://api.coindesk.com/v1/bpi/currentprice/BRL.json");
      const dataBRL = await resBRL.json();

      const btcPriceUSD = dataBRL.bpi.USD.rate_float;
      const btcPriceBRL = dataBRL.bpi.BRL.rate_float;

      await addDoc(collection(db, "purchases"), {
        date: Timestamp.now(),
        btcPriceUSD,
        btcPriceBRL,
        amountBRL: amount,
      });

      setAmount(150);
      fetchPurchases();
    } catch (err) {
      console.error("Erro ao salvar compra:", err);
    } finally {
      setLoading(false);
    }
  };

  // Agrupar compras por mês
  const groupedByMonth = purchases.reduce((acc, purchase) => {
    const date = purchase.date.toDate();
    const monthKey = date.toLocaleString("pt-BR", { month: "long", year: "numeric" });

    if (!acc[monthKey]) {
      acc[monthKey] = [];
    }
    acc[monthKey].push(purchase);

    return acc;
  }, {} as Record<string, Purchase[]>);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Registro de Compras BTC</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border px-3 py-2 rounded"
          placeholder="Valor em R$"
        />
        <button
          onClick={handleAddPurchase}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {loading ? "Salvando..." : "Adicionar"}
        </button>
      </div>

      <div className="space-y-4">
        {Object.keys(groupedByMonth).map((month) => {
          const monthPurchases = groupedByMonth[month];
          const totalWeeks = 5; // Simplesmente fixado em 5
          const boughtWeeks = monthPurchases.length;
          const totalInvested = monthPurchases.reduce((sum, p) => sum + p.amountBRL, 0);

          return (
            <details key={month} className="border rounded">
              <summary className="cursor-pointer bg-gray-100 p-3 flex justify-between">
                <span>{month}</span>
                <span>{boughtWeeks}/{totalWeeks} — R$ {totalInvested.toFixed(2)}</span>
              </summary>
              <div className="p-3 space-y-2">
                {monthPurchases.map((p) => {
                  const date = p.date.toDate();
                  return (
                    <div key={p.id} className="border-b pb-2">
                      <div>
                        <strong>Data:</strong> {date.toLocaleDateString()} {date.toLocaleTimeString()}
                      </div>
                      <div>
                        <strong>BTC:</strong> R$ {p.btcPriceBRL.toLocaleString()} | USD {p.btcPriceUSD.toLocaleString()}
                      </div>
                      <div>
                        <strong>Investido:</strong> R$ {p.amountBRL.toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}