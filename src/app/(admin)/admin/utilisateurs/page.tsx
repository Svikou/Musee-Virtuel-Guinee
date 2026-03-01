import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed521",

      status: "pending",
      username: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: "728ed522",

      status: "success",
      username: "Jane Doe",
      email: "janedoe@gmail.com",
    },
    {
      id: "728ed523",

      status: "success",
      username: "Mike Galloway",
      email: "mikegalloway@gmail.com",
    },
    {
      id: "728ed524",

      status: "failed",
      username: "Minerva Robinson",
      email: "minerbarobinson@gmail.com",
    },
    {
      id: "728ed525",

      status: "success",
      username: "Mable Clayton",
      email: "mableclayton@gmail.com",
    },
    {
      id: "728ed526",

      status: "pending",
      username: "Nathan McDaniel",
      email: "nathanmcdaniel@gmail.com",
    },
    {
      id: "728ed527",

      status: "success",
      username: "Myrtie Lamb",
      email: "myrtielamb@gmail.com",
    },
    {
      id: "728ed528",

      status: "success",
      username: "Leona Bryant",
      email: "leonabryant@gmail.com",
    },
    {
      id: "728ed529",

      status: "failed",
      username: "Aaron Willis",
      email: "aaronwillis@gmail.com",
    },
    {
      id: "728ed52a",

      status: "success",
      username: "Joel Keller",
      email: "joelkeller@gmail.com",
    },
    {
      id: "728ed52b",

      status: "pending",
      username: "Daniel Ellis",
      email: "danielellis@gmail.com",
    },
    {
      id: "728ed52c",

      status: "success",
      username: "Gordon Kennedy",
      email: "gordonkennedy@gmail.com",
    },
    {
      id: "728ed52d",

      status: "failed",
      username: "Emily Hoffman",
      email: "emilyhoffman@gmail.com",
    },
    {
      id: "728ed52e",

      status: "pending",
      username: "Jeffery Garrett",
      email: "jefferygarrett@gmail.com",
    },
    {
      id: "728ed52f",

      status: "success",
      username: "Ralph Baker",
      email: "ralphbaker@gmail.com",
    },
    {
      id: "728ed52g",

      status: "failed",
      username: "Seth Fields",
      email: "sethfields@gmail.com",
    },
    {
      id: "728ed52h",

      status: "pending",
      username: "Julia Webb",
      email: "juliawebb@gmail.com",
    },
    {
      id: "728ed52i",

      status: "success",
      username: "Gary Banks",
      email: "garybanks@gmail.com",
    },
    {
      id: "728ed52j",

      status: "failed",
      username: "Flora Chambers",
      email: "florachambers@gmail.com",
    },
    {
      id: "728ed52k",

      status: "pending",
      username: "Steve Hanson",
      email: "stevehanson@gmail.com",
    },
    {
      id: "728ed52l",

      status: "success",
      username: "Lola Robinson",
      email: "lolarobinson@gmail.com",
    },
    {
      id: "728ed52m",

      status: "pending",
      username: "Ethel Waters",
      email: "ethelwaters@gmail.com",
    },
    {
      id: "728ed52n",

      status: "failed",
      username: "Grace Edwards",
      email: "graceedwards@gmail.com",
    },
    {
      id: "728ed52o",

      status: "success",
      username: "Sallie Wong",
      email: "salliewong@gmail.com",
    },
    {
      id: "728ed52p",

      status: "success",
      username: "Bryan Gutierrez",
      email: "bryangutierrez@gmail.com",
    },
    {
      id: "728ed52q",

      status: "pending",
      username: "Erik Rice",
      email: "erikrice@gmail.com",
    },
    {
      id: "728ed52r",

      status: "success",
      username: "Jordan Atkins",
      email: "jordanatkins@gmail.com",
    },
    {
      id: "728ed52s",

      status: "failed",
      username: "Bill Brewer",
      email: "billbrewer@gmail.com",
    },
    {
      id: "728ed52t",

      status: "success",
      username: "Edwin Morris",
      email: "edwinmorris@gmail.com",
    },
    {
      id: "728ed52u",

      status: "success",
      username: "Harold Becker",
      email: "haroldbecker@gmail.com",
    },
    {
      id: "728ed52v",

      status: "success",
      username: "Hannah Rodriguez",
      email: "hannahrodriguez@gmail.com",
    },
    {
      id: "728ed52w",

      status: "success",
      username: "Zachary Beck",
      email: "zacharybeck@gmail.com",
    },
    {
      id: "728ed52x",

      status: "failed",
      username: "Frances Potter",
      email: "francespotter@gmail.com",
    },
    {
      id: "728ed52y",

      status: "success",
      username: "Raymond Murray",
      email: "raymondmurray@gmail.com",
    },
    {
      id: "728ed52z",

      status: "success",
      username: "Adam Sherman",
      email: "adamsherman@gmail.com",
    },
    {
      id: "728ed521f",

      status: "pending",
      username: "Anne Cruz",
      email: "annecruz@gmail.com",
    },
  ];
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="my-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
