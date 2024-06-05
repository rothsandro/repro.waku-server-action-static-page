import { Child } from "../components/child";

export default async function HomePage() {
  const onRun = async () => {
    "use server";
    return "foo";
  };

  return <Child run={onRun} />;
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
