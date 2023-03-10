import React from "react";

export const Contact = () => {
  return (
    <section class="bg-gray-100 md:pt-52 pt-32">
      <div class="max-w-5xl mx-auto px-3">
        <h1 className="md:text-6xl md:my-5 text-4xl my-3 leading-tight tracking-wider af-font">
          Contact
        </h1>
        <p class="text-lg text-gray-700 mb-8">
          I'd love to hear from you. Send us a message and I'll get back to you
          as soon as possible.
        </p>
        <form action="#" method="POST" class="grid grid-cols-1 gap-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                for="first_name"
                class="block text-gray-700 font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                class="bg-gray-200 py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline-gray"
                required
              />
            </div>
            <div>
              <label for="last_name" class="block text-gray-700 font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                class="bg-gray-200 py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline-gray"
                required
              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-gray-700 font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-200 py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline-gray"
              required
            />
          </div>
          <div>
            <label for="message" class="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              class="bg-gray-200 py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline-gray"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
