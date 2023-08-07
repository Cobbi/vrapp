import AppLayout from "@/src/components/AppLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
