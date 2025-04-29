import React from "react";

function Footer() {
  return (
    <>
      <div className="overflow-hidden">
        <hr />
        <footer className="footer footer-center  dark:bg-black dark:text-white text-base-content rounded p-10 ">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover" href="/about">
              About us
            </a>
            <a className="link link-hover" href="/contact">
              Contact
            </a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-6 text-white">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/adarsh-kumbar-237405219/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="hover:text-blue-500 transition"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-.9 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V24h-4v-8.4c0-2-.04-4.5-2.8-4.5-2.8 0-3.2 2.2-3.2 4.3V24h-4V8.5z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Adarsh-Kumbar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="hover:text-blue-500 transition"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/Adarsh_Kumbar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="#e9ecf2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:text-blue-500 transition"
                >
                  <title>LeetCode icon</title>
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Book Store Pvt Ltd
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
}

export default Footer;
