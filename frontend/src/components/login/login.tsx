import React from "react";
import $ from "jQuery";

type Props = {
  changeLogInState: any;
};

type State = {
  userName: string;
  password: string;
  error: string;
  isLoggedIn: boolean;
  showLogModal: boolean;
};

export default class Login extends React.Component<Props, State> {
  public state: State = {
    userName: "",
    password: "",
    error: "",
    isLoggedIn: false,
    showLogModal: false,
  };


  handleSubmit() {
    const pass = $("#password").val();
    const userName = $("#userName").val();

    if (userName === "grader" || ("Grader" && pass === "GiveMea100!!")) {
      this.props.changeLogInState();
      this.setState({ showLogModal: false });
      this.setState({ isLoggedIn: true });
    } else {
      alert("We didn't find that User Name & Password combination");
    }
  }

  render() {
    return (
      <>
        {this.state.showLogModal ? (
          <div
            id="modal"
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
            aria-modal="true"
            role="dialog"
          >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  onClick={() => this.setState({ showLogModal: false })}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                  </svg>
                  <span className="sr-only"></span>
                </button>
                <div className="py-6 px-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Login to edit employees
                  </h3>
                  <form className="space-y-6" action="#">
                    <div className="flex justify-center">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          User Name
                        </label>
                        <input
                          type="name"
                          name="name"
                          id="userName"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Andrew87E"
                          required
                        />
                      </div>
                      <br />
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="********"
                          required
                        />
                      </div>
                    </div>
                    <div></div>
                  </form>
                  <button
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={() => this.handleSubmit()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {this.state.isLoggedIn ? null : (
          <button
            className="inline-flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => this.setState({ showLogModal: true })}
          >
            LogIn
          </button>
        )}
      </>
    );
  }
}
