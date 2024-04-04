const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h2 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h2>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form
            action="https://openformstack.com/f/clukzwjw10009cb03540vf8fb"
            method="POST"
          >
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#001b5e]">
                Nom
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nom"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#001b5e] outline-none focus:border-[#001b5e] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#001b5e]">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Numéro de téléphone"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#001b5e] outline-none focus:border-[#001b5e] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#001b5e]">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#001b5e] outline-none focus:border-[#001b5e] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#001b5e]">
                Sujet
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Titre du message"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#001b5e] outline-none focus:border-[#001b5e] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#001b5e]">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Ecrivez votre message ici..."
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#001b5e] outline-none focus:border-[#001b5e] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className="w-full hover:shadow-form rounded-md bg-[#001b5e] py-3 px-8 text-base font-semibold text-white outline-none">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
