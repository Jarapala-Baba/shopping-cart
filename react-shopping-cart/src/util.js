export default function formatCurrency(num)
{
    return "Rs "+Math.ceil(Number(num.toFixed(1))).toLocaleString()+" ";
}