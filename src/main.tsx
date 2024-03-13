import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  Chain,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const shardeumDev = {
  id: 8082,
  name: "Shardeum Dev",
  iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/22353.png",
  iconBackground: "#fff",
  nativeCurrency: { name: "Shardeum Dev", symbol: "SHM", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://hackathon.shardeum.org/"] },
  },
} as const satisfies Chain;

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [shardeumDev],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

// const isShardeumChain = window.ethereum?.chainId === shardeumSphinx.chainId;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider initialChain={8082}>
        <App />
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);
