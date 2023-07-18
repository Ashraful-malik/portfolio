<template>
  <div>
    <div class="relative h-screen contact-background" id="contact">
      <div
        class="content max-w-6xl pt-28 h-auto m-auto p-4 lg:p-0 lg:flex lg:flex-col lg:pt-52"
      >
        <h1 class="lg:text-5xl text-3xl font-medium">Let’s talk</h1>
        <div
          class="contact_info mt-12 flex items-center w-3/4 justify-between flex-wrap lg:w-4/5"
        >
          <div class="email w-max">
            <p class="lg:text-xl text-lg text-black mb-2">Email</p>
            <a
              href="mailto: ashraful.inbox@gmail.com"
              class="lg:text-3xl text-xl text-gray-900"
              ><span> ashraful.inbox@gmail.com</span>
            </a>
          </div>
          <div class="social_links lg:mt-0 mt-8">
            <p class="lg:text-xl text-lg text-black mb-2">Connect</p>
            <div class="links flex items-center justify-between text-black">
              <div class="link mr-4 lg:text-2xl text-xl">
                <a
                  href="https://www.instagram.com/uiwebbyte/"
                  target="_black"
                  class="flex items-center"
                >
                  <span>Instagram</span>
                </a>
              </div>
              <div class="link mr-4 lg:text-2xl text-xl flex item-ce">
                <a
                  href="https://twitter.com/Ashraful__malik"
                  target="_blank"
                  class="flex items-center"
                  ><span> twitter </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-background {
  background: #fafd5d;
}
a {
  position: relative;
}
a span::after,
span::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  width: 100%;
  height: 2px;
  transform: scalex(0);
  transform-origin: right;
  transition: transform 250ms ease-in;
}
a span::before {
  bottom: -5px;
  transform-origin: left;
}
a span:hover::after {
  transform: scalex(1);
  transform-origin: left;
}
a span:hover::before {
  transform: scalex(1);
  transform-origin: right;
}
</style>
