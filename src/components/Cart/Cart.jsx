import { useContext } from "react";
import CartDevice from "./CartDevice";
import CartContext from "../../Context/Cardcontext";
import { Link } from "react-router-dom";
import HistoryContext from "../../context/purchasecontext";
const Cart = () => {
  const { cart, sortCart, clearCart, price } = useContext(CartContext);
  const handleClose = () => {
    addToHistory(cart);
    clearCart();
  };
  const { history, addToHistory } = useContext(HistoryContext);
  console.log(history);
  const handlePurchase = () => {
    document.getElementById("my_modal_5").showModal();
  };
  return (
    <div className="bg-background-0 px-5 pt-3 text-black md:px-8 md:pt-8 lg:px-32">
      <div className="flex items-center justify-between pb-8 md:px-5">
        <p className="text-xl font-bold text-[#0B0B0B] md:text-2xl">Cart</p>
        <div className="flex items-center justify-between gap-4">
          <p className="mr-3 text-lg font-semibold text-[#0B0B0B] md:text-2xl md:font-bold lg:mr-6">
            Total cost: ${price}
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <button
              onClick={sortCart}
              className={`btn flex h-auto items-center gap-1 rounded-[32px] border-[1.5px] px-2 py-[6px] text-lg font-semibold md:mr-4 md:gap-2 md:px-5 md:py-2 ${
                price == 0 ? "btn-disabled" : ""
              }`}
            >
              <p className="w-max md:w-auto">Sort by Price</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_13_2554)">
                  <path
                    d="M4 10C4 10.5304 4.21071 11.0391 4.58579 11.4142C4.96086 11.7893 5.46957 12 6 12C6.53043 12 7.03914 11.7893 7.41421 11.4142C7.78929 11.0391 8 10.5304 8 10C8 9.46957 7.78929 8.96086 7.41421 8.58579C7.03914 8.21071 6.53043 8 6 8C5.46957 8 4.96086 8.21071 4.58579 8.58579C4.21071 8.96086 4 9.46957 4 10Z"
                    stroke="#8332C5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 4V8"
                    stroke="#8332C5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 12V20"
                    stroke="#8332C5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16C14 15.4696 13.7893 14.9609 13.4142 14.5858C13.0391 14.2107 12.5304 14 12 14C11.4696 14 10.9609 14.2107 10.5858 14.5858C10.2107 14.9609 10 15.4696 10 16Z"
                    stroke="#8332C5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 4V14"
                    stroke="#8332C5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18V20"
                    stroke="#8332C5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 7C16 7.53043 16.2107 8.03914 16.5858 8.41421C16.9609 8.78929 17.4696 9 18 9C18.5304 9 19.0391 8.78929 19.4142 8.41421C19.7893 8.03914 20 7.53043 20 7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5C17.4696 5 16.9609 5.21071 16.5858 5.58579C16.2107 5.96086 16 6.46957 16 7Z"
                    stroke="#8332C5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 4V5"
                    stroke="#8332C5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 9V20"
                    stroke="#8332C5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13_2554">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button
              onClick={handlePurchase}
              className={`btn ${price == 0 ? "btn-disabled" : ""} rounded-[32px] border-[1.5px] border-[#9538E2] bg-[#9538E2] px-5 py-2 font-medium text-white md:text-lg`}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-6 md:px-5">
        {cart.map((device, id) => (
          <CartDevice device={device} key={id}></CartDevice>
        ))}
      </div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom text-[#09080F] sm:modal-middle"
      >
        <div className="modal-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            className="mx-auto"
          >
            <path
              d="M68.1715 41.9631L68.1505 41.9735C65.6826 43.8661 64.6369 47.0869 65.5154 50.0673L65.5258 50.0882C66.927 54.8253 63.4553 59.6041 58.5194 59.7296H58.4986C55.3823 59.8133 52.6425 61.8001 51.6073 64.7386V64.749C49.9549 69.4128 44.3292 71.2427 40.2614 68.4297C37.7355 66.7049 34.3963 66.6149 31.7388 68.4297H31.7284C27.6607 71.2322 22.0347 69.4127 20.3929 64.7384C19.3483 61.7926 16.6126 59.813 13.5017 59.7295H13.4807C8.54508 59.6039 5.07319 54.8252 6.47452 50.0881L6.48492 50.0671C7.36312 47.0867 6.31744 43.866 3.84975 41.9733L3.8288 41.9629C-0.0926719 38.9512 -0.0926719 33.0535 3.8288 30.0419L3.84975 30.0315C6.31744 28.1388 7.36312 24.9179 6.47452 21.9376V21.9167C5.06264 17.1797 8.54494 12.4007 13.4807 12.2753H13.5017C16.6074 12.1916 19.3576 10.2047 20.3929 7.26638V7.25598C22.0345 2.59215 27.6607 0.762194 31.7284 3.57526H31.7388C34.3007 5.34249 37.6888 5.34249 40.2614 3.57526C44.3701 0.737866 49.9646 2.62013 51.6073 7.25598V7.26638C52.6425 10.1943 55.3822 12.1918 58.4986 12.2753H58.5194C63.4552 12.4007 66.927 17.1797 65.5258 21.9167L65.5154 21.9376C64.6369 24.9179 65.6826 28.1388 68.1505 30.0315L68.1715 30.0419C72.093 33.0535 72.093 38.9513 68.1715 41.9631Z"
              fill="#3EB655"
            />
            <path
              d="M36.0004 55.479C46.7584 55.479 55.4794 46.7579 55.4794 36C55.4794 25.2421 46.7584 16.5211 36.0004 16.5211C25.2425 16.5211 16.5215 25.2421 16.5215 36C16.5215 46.7579 25.2425 55.479 36.0004 55.479Z"
              fill="#8BD399"
            />
            <path
              opacity="0.1"
              d="M50.9569 23.5312C47.5876 20.7595 43.2771 19.0935 38.5779 19.0935C27.8201 19.0935 19.0943 27.8193 19.0943 38.5771C19.0943 43.2762 20.7603 47.5868 23.5319 50.956C19.2511 47.3851 16.5244 42.0137 16.5244 35.9997C16.5244 25.2417 25.2427 16.5236 36.0006 16.5236C42.0145 16.5236 47.386 19.2503 50.9569 23.5312Z"
              fill="black"
            />
            <path
              d="M31.3659 43.6256L27.0584 39.0429C25.9303 37.8425 25.9886 35.9552 27.1885 34.8271C28.3885 33.6976 30.2766 33.7582 31.4037 34.9577L33.46 37.1444L42.2002 27.1547C43.2836 25.915 45.168 25.7893 46.4087 26.8742C47.6485 27.9591 47.7736 29.8429 46.6893 31.0827L35.7831 43.547C34.6212 44.8735 32.5708 44.9082 31.3659 43.6256Z"
              fill="white"
            />
          </svg>
          <h3 className="mb-3 mt-6 text-2xl font-bold">Payment Successfully</h3>

          <p className="border-t pt-3 font-medium opacity-60">
            Thanks for purchasing.
          </p>
          <p className="font-medium opacity-60">Total: ${price}</p>
          <div className="modal-action block">
            <form method="dialog" className="">
              <Link
                to={"/"}
                onClick={handleClose}
                className="btn w-full rounded-full bg-[#11000008]"
              >
                Close
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
