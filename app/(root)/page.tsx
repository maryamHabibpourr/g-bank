import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";


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


export default function Home() {
  return (
    <section className="home">
    <div className="home-content">
      <header className="home-header">
        <HeaderBox
             type="greeting"
             title="Welcome"
             user="maryam"
             subtext="Access and manage your account and transactions efficiently."
        />
    
        <TotalBalanceBox 
            accounts={[]}
            totalBanks={20}
            totalCurrentBalance={1250}
          />
      </header>

    </div>
      <RightSidebar
         user={loggedIn}
          transactions={[]}
          banks={[{currentBalance:125.35},{currentBalance:500.20}]}
      />
  </section>
  );
}
