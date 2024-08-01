import { Products } from "./Products";
import { Promo } from "./Promo";

export const Main = () => {
  return (
    <main className="main">
      <Promo />

      <Products />
    </main>
  );
};
