

const Alert = ({ alert}) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {}, 9000);
  }

  return (
    <>
      {alert?.active && (
        <div x-data className="bg-indigo-100 p-5 w-full rounded mb-8">
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-sm text-black font-medium">{alert.message}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
