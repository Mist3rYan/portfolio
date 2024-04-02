const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form action="" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Nom</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Téléphone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
              id="phone"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="uppercase text-sm py-2">Sujet</label>
            <input
              type="text"
              className="border-2 rounded-lg p-3 flex border-gray-300"
              name="subject"
              id="subject"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 flex border-gray-300"
              rows="10"
              name="message"
              id="message"
            ></textarea>
          </div>
          <div className="flex flex-col col-span-2">
            <button className="bg-[#001b5e] text-gray-100 w-full p-4 rounded-lg">
              Envoyer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
