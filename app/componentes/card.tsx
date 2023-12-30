import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="overflow-hidden relative duration-700 border rounded-x1 hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
    {children}
  </div>
);
