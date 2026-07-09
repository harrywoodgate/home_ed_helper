import logoTwo from '../../img/logo_two.png'

export default function LoginBrandingCard() {
  return (
    <div className="flex flex-col justify-center h-screen lg:w-[338px]">
      <div className="flex items-center gap-x-3 mb-4 lg:mb-8">
        <img
          src={logoTwo}
          alt="logo"
          className="w-5 h-6 lg:w-7 lg:h-8 pb-[3px]"
        />
        <h1 className="text-md lg:text-xl font-bold">Home Ed Helper</h1>
      </div>
      <p className="text-xl lg:text-3xl font-bold flex flex-col gap-y-1 mb-4">
        Create professional
        <p className="text-secondary">home education reports</p> in seconds.
      </p>
      <p className="text-secondary_text text-xs lg:text-base">
        Save time, stay organised, and focus on what matters most - your childs
        learning
      </p>
      <div>
        <div className="flex gap-x-4 mt-6 items-center">
          <div className="bg-violet-200 rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-secondary w-4 h-4 lg:w-6 lg:h-6"
            >
              <title>file-document-outline</title>
              <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] lg:text-xs font-bold mb-1">Easy Report Creation</p>
            <p className="text-[10px] lg:text-xs text-secondary_text">
              Generate detailed reports in minutes
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 mt-6 items-center">
          <div className="bg-violet-200 rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-secondary w-4 h-4 lg:w-6 lg:h-6"
            >
              <title>clock-outline</title>
              <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] lg:text-xs font-bold mb-1">Organised History</p>
            <p className="text-[10px] lg:text-xs text-secondary_text">
              View and manage your reports
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 mt-6 items-center">
          <div className="bg-violet-200 rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 lg:w-6 lg:h-6 fill-secondary">
              <title>shield-outline</title>
              <path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21Z" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] lg:text-xs font-bold mb-1">Secure and private</p>
            <p className="text-[10px] lg:text-xs text-secondary_text">
              Your data is never shared
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
