import { useState } from "react";
import { BsFire } from "react-icons/bs";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { LuDot } from "react-icons/lu";

const PlanPrice = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const plans = {
    basic: {
      name: "Basic",
      description: "Solo for entrepreneurs",
      monthly: 10,
      yearly: 100,
      features: [
        "POS Lite",
        "10 inventory locations",
        "24/7 chat support",
        "Localized global selling (3 markets)",
      ],
    },
    advanced: {
      name: "Advanced",
      description: "As your business scales",
      monthly: 199,
      yearly: 1990,
      features: [
        "POS Lite",
        "10 inventory locations",
        "24/7 chat support",
        "Localized global selling (5 markets) + add markets at $99 USD/mo each",
        "15 additional staff accounts",
        "Localized global selling (5 markets)",
      ],
      popular: true,
    },
    plus: {
      name: "Plus",
      description: "For more complex business",
      monthly: 599,
      yearly: 5990,
      features: [
        "POS Lite",
        "10 inventory locations",
        "24/7 chat support",
        "Localized global selling (5 markets) + add markets at $99 USD/mo each",
        "15 additional staff accounts",
        "Localized global selling (5 markets)",
      ],
    },
  };

  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="my-4">
        <h2 className="font-semibold text-2xl md:text-3xl text-black text-center">
          Plans and Prices
        </h2>
        <p className="text-[#555151] text-base text-center mt-3">
          From building your first website and registering your domain to
          setting up a professional email address,
        </p>
      </div>
      {/* Billing Toggle */}
      <div className="flex justify-center mt-8 mb-12">
        <div className="px-1.5 py-1.5 rounded-full border border-[#545454] inline-flex">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-8 py-2 rounded-full text-sm font-medium transition-colors ${
              billingCycle === "monthly"
                ? "bg-[#7230FF] text-white"
                : "text-[#545454] hover:text-gray-900"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-8 py-2 rounded-full text-sm font-medium transition-colors ${
              billingCycle === "yearly"
                ? "bg-[#7230FF] text-white"
                : "text-[#545454] hover:text-gray-900"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {Object.entries(plans).map(([key, plan]) => (
          <div
            key={key}
            className={`rounded-xl p-5 flex flex-col h-full ${
              key === "plus"
                ? "bg-[#7636FF] text-white"
                : key === "advanced"
                ? "bg-[#212121] text-white"
                : "bg-[#F6F6F6] border border-[#7B7B7B]"
            }`}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold flex items-center gap-4">
                {plan.name}{" "}
                {plan.popular && (
                  <p className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#F58A25] text-white">
                    <BsFire className="w-3.5 h-3.5 text-red-600" /> Most Popular
                  </p>
                )}
              </h3>
              <p className="text-sm opacity-80 flex items-center gap-1 mt-2">
                <LuDot size={15} /> {plan.description}
              </p>
            </div>

            <div className="mt-6 mb-8">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">$</span>
                <span className="text-4xl font-bold">
                  {billingCycle === "monthly"
                    ? plan.monthly
                    : Math.round(plan.yearly / 12)}
                  /
                </span>
                <span className="ml-2 opacity-80">month</span>
              </div>
              <p className="text-sm mt-2 opacity-80 flex items-center gap-1">
                <LuDot size={15} /> Billed{" "}
                {billingCycle === "monthly" ? "Monthly" : "Yearly"}
              </p>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              <p className="text-sm font-medium">Card rates starting at</p>
              <p className="text-sm flex items-center">
                <IoCheckmarkCircleSharp
                  className={`w-5 h-5 mr-2 ${
                    key === "plus"
                      ? "text-[#d9d9d9c4]"
                      : key === "advanced"
                      ? "text-white"
                      : "text-[#696969b0]"
                  }`}
                />{" "}
                2% 3rd-party payment providers
              </p>

              <div className="pt-4">
                <p className="text-sm font-medium mb-4">Standout Features</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <IoCheckmarkCircleSharp
                        className={`w-5 h-5 mr-2 flex-shrink-0 ${
                          key === "plus"
                            ? "text-[#d9d9d9c4]"
                            : key === "advanced"
                            ? "text-white"
                            : "text-[#696969b0]"
                        }`}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-auto">
              <button
                className={`w-full py-3 px-4 rounded-xl font-medium transition-colors ${
                  key === "plus" || key === "advanced"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-[#7230FF] text-white hover:bg-[#7b40fc]"
                }`}
              >
                Try For Free
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanPrice;
