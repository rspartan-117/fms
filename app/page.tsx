import { trpc } from "@/server/client";

export default function Home() {
const getUsers = trpc.user.getUsers.useQuery();

  return (
    <main>
      {JSON.stringify(getUsers.data)}
    </main>
    
  );
}
