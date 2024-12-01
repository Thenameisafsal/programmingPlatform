interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white shadow-sm rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}