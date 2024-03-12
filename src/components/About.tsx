import AvatarCard1 from "../images/CardInCardAvatar-1.png";
import AvatarCard2 from "../images/CardInCardAvatar-2.png";
import AvatarCard3 from "../images/CardInCardAvatar-3.png";
import AvatarCard4 from "../images/CardInCardAvatar-4.png";

export default function About() {
  return (
    <div className="flex justify-center">
      <div className="content-wrapper container 2xl:px-20">
        <div className="card-body rounded-xl relative border mx-4 border-gray-900 bg-midnight mt-36 mb-16 flex justify-start">
          <div className="w-full h-full relative overflow-hidden p-6 lg:p-20">
            <div className="relative z-10">
              <h3 className="text-white font-Sora font-bold lg:leading-tight text-2xl  md:text-4xl lg:text-5xl mt-3 mb-5">
                About the <br /> Creators! <br /> Connect Now
              </h3>
              <p className="text-slate-500 font-Inter text-sm">
                Join us in fostering community bonds. At Okatu-Verse, <br />{" "}
                we're dedicated to connecting with our community to <br />{" "} share experiences, support one another,
                and create a vibrant, inclusive space for all.
              </p>
              <div className="flex justify-start items-center gap-4 mt-12">
                <a
                  className="text-white px-5 py-3 rounded-lg font-Sora whitespace-nowrap text-sm bg-gradient-contact ease-in duration-200 hover:bg-gradient-to-r from-indigo-700 to-indigo-800"
                  href="#getstarted"
                >
                  Get started
                </a>
                <a
                  className="text-slate-400 px-5 py-3 border font-Sora whitespace-nowrap text-sm rounded-lg border-slate-700 bg-transparent ease-in duration-100 hover:bg-gray-700 hover:text-white"
                  href="#more"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="absolute top-20 right-0 z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 pr-48 rounded-3xl opacity-25 xl:blur-none xl:opacity-100 border border-gray-800 bg-midnight flex justify-start items-start">
                  <img src={AvatarCard1} alt="Avatar Profile" />
                  <div className="flex flex-col justify-start pl-4 pr-2">
                    <div className="flex justify-between items-center gap-20">
                      <h5 className="text-white text-lg font-Sora">Ank Agarwal</h5>
                    </div>
                    <div className="flex justify-start items-center gap-6 mt-2">
                      <div className="flex justify-start items-center gap-6 mt-2">
                        <a href="https://github.com/itsankk05" target="_blank" rel="noopener noreferrer">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(245, 245, 245, 1)', transform: '', msFilter: '' }}>
                              <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 pr-48 rounded-3xl opacity-25 xl:blur-none xl:opacity-100 border border-gray-800 bg-midnight flex justify-start items-start">
                  <img src={AvatarCard1} alt="Avatar Profile" />
                  <div className="flex flex-col justify-start pl-4 pr-2">
                    <div className="flex justify-between items-center gap-20">
                      <h5 className="text-white text-lg font-Sora">Jeet Shah</h5>
                    </div>
                    <div className="flex justify-start items-center gap-6 mt-2">
                      <div className="flex justify-start items-center gap-6 mt-2">
                        <a href="https://github.com/jeetshah07" target="_blank" rel="noopener noreferrer">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(245, 245, 245, 1)', transform: '', msFilter: '' }}>
                              <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 pr-48 rounded-3xl opacity-25 xl:blur-none xl:opacity-100 border border-gray-800 bg-midnight flex justify-start items-start">
                  <img src={AvatarCard1} alt="Avatar Profile" />
                  <div className="flex flex-col justify-start pl-4 pr-2">
                    <div className="flex justify-between items-center gap-20">
                      <h5 className="text-white text-lg font-Sora">Mohd Zaid</h5>
                    </div>
                    <div className="flex justify-start items-center gap-6 mt-2">
                      <div className="flex justify-start items-center gap-6 mt-2">
                        <a href="https://github.com/dev-zaid" target="_blank" rel="noopener noreferrer">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(245, 245, 245, 1)', transform: '', msFilter: '' }}>
                              <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 pr-48 rounded-3xl opacity-25 xl:blur-none xl:opacity-100 border border-gray-800 bg-midnight flex justify-start items-start">
                  <img src={AvatarCard1} alt="Avatar Profile" />
                  <div className="flex flex-col justify-start pl-4 pr-2">
                    <div className="flex justify-between items-center gap-20">
                      <h5 className="text-white text-lg font-Sora">Ujjawal Jaiswal</h5>
                    </div>
                    <div className="flex justify-start items-center gap-6 mt-2">
                      <div className="flex justify-start items-center gap-6 mt-2">
                        <a href="https://github.com/Ujjawal0204" target="_blank" rel="noopener noreferrer">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(245, 245, 245, 1)', transform: '', msFilter: '' }}>
                              <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
