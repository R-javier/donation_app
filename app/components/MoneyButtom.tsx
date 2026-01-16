type Props = {
  amount: number;
};

export function MoneyButton({ amount }: Props) {
  return (
    <button
      type="submit"
      name="amount"
      value={amount}
      style={{
        textDecoration: "none",
        padding: "10px 20px",
        backgroundColor: "rgba(255,255,255,0.02)",
        border: "1px solid #2a3442",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      ${amount}
    </button>
  );
}
