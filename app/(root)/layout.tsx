

import Image from "next/image";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";




export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  const loggedIn =  {
    $id: "defqhjkgewq",
    email: "maryam@gmail.com",
    userId: "jhhol",
    dwollaCustomerUrl: "dfcvhksgdj",
    dwollaCustomerId: "hjkgsdvfk",
    firstName: "maryam",
    lastName: "habibpour",
    name: "maryam",
    address1: "ghsd",
    city: "hjmdg",
    state: "jlkgg.f",
    postalCode: "hfh",
    dateOfBirth: "jcfkgdse",
    ssn: "jfdvjkfd"
  };
  // const loggedIn = await getLoggedInUser();

  // if(!loggedIn) redirect('/sign-in')


  
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

