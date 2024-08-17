import { useRef, useState } from "react";

export function Toaster() {
  const [toast, setToast] = useState([]);
  const timeRef = useRef({});

  function addToast(message, type) {
    let id = new Date().getTime();
    let copyToast = [...toast, { id, message, type }];
    setToast(copyToast);
    timeRef.current[id] = setTimeout(() => handleClose(id), 5000);
  }

  function handleClose(id) {
    clearTimeout(timeRef.current[id]);
    delete timeRef.current[id];

    setToast((prevToast) => {
      const filterToast = prevToast.filter((toast, index) => toast.id !== id);
      return filterToast;
    });
  }

  return (
    <>
      <div className="container">
        <div className="toast-container">
          {toast &&
            toast.map((obj, index) => {
              return (
                <div key={obj.id} className={`toast ${obj.type}`}>
                  {" "}
                  {obj.message}{" "}
                  <span
                    onClick={() => {
                      handleClose(obj.id);
                    }}
                  >
                    x
                  </span>
                </div>
              );
            })}
        </div>
        <div className="button-container">
          <button
            onClick={() => {
              addToast("Success", "success");
            }}
          >
            {" "}
            Success
          </button>
          <button
            onClick={() => {
              addToast("Error", "error");
            }}
          >
            {" "}
            Error
          </button>
          <button
            onClick={() => {
              addToast("Info", "info");
            }}
          >
            {" "}
            Info
          </button>
          <button
            onClick={() => {
              addToast("Alert", "alert");
            }}
          >
            {" "}
            Alert
          </button>
        </div>
      </div>
    </>
  );
}
