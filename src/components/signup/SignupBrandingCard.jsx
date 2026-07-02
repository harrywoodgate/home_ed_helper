import logoTwo from '../../img/logo_two.png'

export default function SingupBrandingCard() {
  return (
    <div className="flex flex-col justify-center h-screen w-[338px]">
      <div className="flex items-center gap-x-3 mb-8">
        <img
          src={logoTwo}
          alt="logo"
          className="w-7 h-8 pb-[3px]"
        />
        <h1 className="text-xl font-bold">Home Ed Helper</h1>
      </div>
      <p className="text-3xl font-bold mb-1">Simplify Learning,</p>
      <p className="text-3xl font-bold mb-4">every day.</p>
      <p className="text-secondary_text">
        Create engaging daily learning reports in minutes, not hours
      </p>
      <div>
        <div className="flex gap-x-4 mt-6 items-center">
          <div className="bg-violet-200 rounded-full w-10 h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-secondary w-6 h-6"
            >
              <title>file-document-outline</title>
              <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold mb-1">Save hours each week</p>
            <p className="text-xs text-secondary_text">
              Generate detailed reports in minutes
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 mt-6 items-center">
          <div className="bg-violet-200 rounded-full w-10 h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-secondary"
            >
              <title>shield-outline</title>
              <path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21Z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold mb-1">Secure and private</p>
            <p className="text-xs text-secondary_text">
              Your data is encrypted and never shared
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 mt-6 items-center">
          <div className="bg-violet-200 rounded-full w-10 h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-secondary h-6 w-6"
            >
              <title>check-circle-outline</title>
              <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold mb-1">Made for home educators</p>
            <p className="text-xs text-secondary_text">
              Built by home educators, for home educators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
