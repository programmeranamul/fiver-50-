import AddressInfo from "./../../components/Address/AddressInfo";
import AddressDataSection from "./../../components/Address/AddressDataSection";

function Address() {
  return (
    <section>
      <div className="container">
        <h1 className="title-2 dark-white-color fw-700 mb-4">Address</h1>
        <AddressInfo />
        <AddressDataSection />
      </div>
    </section>
  );
}

export default Address;
