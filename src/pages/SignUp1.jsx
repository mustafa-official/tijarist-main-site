const SignUp1 = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="bg-white p-4 sm:p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-3 sm:mb-4">Payment Method</h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <label className="flex flex-col rounded-xl  border border-[#00000040] p-3 sm:px-4 py-6 cursor-pointer hover:border-[#7230FF] transition-colors flex-1">
            <div className="flex justify-end">
              <input
                type="radio"
                name="payment"
                value="bkash"
                // checked={paymentMethod === "bkash"}
                // onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2 accent-[#7230FF]"
              />
            </div>
            Bkash
          </label>
          <label className="flex items-center border p-3 sm:p-4 cursor-pointer hover:border-blue-500 transition-colors flex-1">
            <input
              type="radio"
              name="payment"
              value="nagad"
              // checked={paymentMethod === "nagad"}
              // onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Nagad
          </label>
          <label className="flex items-center border p-3 sm:p-4 cursor-pointer hover:border-blue-500 transition-colors flex-1">
            <input
              type="radio"
              name="payment"
              value="cod"
              // checked={paymentMethod === "cod"}
              // onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Cash on Delivery
          </label>
        </div>
      </div>
    </div>
  );
};

export default SignUp1;
