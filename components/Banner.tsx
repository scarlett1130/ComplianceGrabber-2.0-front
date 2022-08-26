import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="absolute inset-0 max-h-[800px] ">
      <Image
        src="https://images.unsplash.com/photo-1613690399151-65ea69478674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
        layout="fill"
        className="object-cover"
        alt="banner image"
      />
      <div
        className="absolute inset-0 bg-gray-900 opacity-60 mix-blend-multiply"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-poppins tracking-tight  text-white sm:text-5xl lg:text-6xl">
          ComplianceGrabber 2.0
        </h1>
        <p className="mt-6 hidden sm:block text-xl text-white font-poppins text-center leading-10">
          You’re digital tool to get all you need in one place and from all the
          best suppliers,we strive to make all the product details available for
          you,coming from the most used and trusted suppliers all around the
          Globe !
        </p>
      </div>
      <div className="relative bottom-0 mt-56 sm:mt-36 flex justify-center ">
        <button className="font-poppins relative overflow-hidden text-3xl group text-white rounded-full flex items-center justify-center space-x-4 border-4 border-white  min-w-[350px] px-4">
          <p className="z-10">Features</p>
          <svg
            className="z-10 group-hover:scale-105 smooth-transition"
            width="80"
            height="60"
            viewBox="0 0 95 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect y="0.295227" width="95" height="51" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_4_28"
                  transform="translate(0.231579) scale(0.00559211 0.0104167)"
                />
              </pattern>
              <image
                id="image0_4_28"
                width="96"
                height="96"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAF30lEQVR4nO2dy48VRRSHv0N4SBQR8YU4RiOvhYKPnSAGBCFCNCZuJSYSNcFEXfjYCRsDuDD6J+hKNBKNYIw8gtE1KGJgAFFBARnCEDH4SObnonoAJ3i7uru6q6e7v+TmbqrOPfM7U13V9TgFHR0dHR0dHR0dHR1tw2I70AtJ1wP3ALOBOcAs4EbgSmBK8g3wB3Am+T4JHLjks9vMTlXruT+1CoCkicASYHHyuYviPgr4FtgJbAe2mdmfBW02C0n3SXpb0oDKZ1DSu5KWSKrVP2ClSJog6VlJhyoQ/f84KOkZSRNi61EZkiZKeknSsYjCj+SYpBfkHoHNRdJKST/E1bonhyU9Elun4Ejqk7Q5srhZ+EjSLbF1C4KkRyWdjixoHgYlPRFbv9xIGitpvaShuDoWYkhudDa+LJ1KGYZJmgJ8Aiwow34EvgQeM7PB0IaDB0DSNOAzYF5o25HZByw3s2MhjQYNgKQZwBfAbSHt1ogfgaVmdiiUwWABkHQz8DXNFX+Yo8B8MzsawtiYEEYkTQa20HzxAfqArUk/V5jCAUhGCJ8Cdxd3Z9RwJ7BZ0riihkK0gI00Z7SThQeBN4oaKdQHSFqJG262dVZRwONm9nFeA7mFk9QHfINbGGkzp4F5ZvZLnspFHkHv0IkPMBV4K2/lXC1A0nLcy1bHRVaY2daslTIHQG7OfB9we9a6DecgMDfrcmeeR9BzdOJfjpnA6qyVMrUAuaW7w8D0rD/UEo4CM8zsb98KWVvAU3Ti96IPWJWlgncA5HYQvJzVowisi/z7ryjDbossLWAhcEd2f6rFzNYCr0V0YSYw37dwlgA8md2XOJjZBuIGwVsrr6Yi6QrgOHBNXo+qwswu/E2SXgXWR3DjLDDNzM6nFfRtAUsZBeKPJGkJMfqEycAin4K+AVic35e4ROwTvDRrfAAgWp/gpVlqHyC3RfykT9k6cGkfMBJJa4HXK3JlCLjBzE73KuTTAu5llIifRsWPozG4sw2phdKYXdyX+lDx4yhVu9YFACoNQpAAzArgSO2oaIiaGoCxHkZuCuDIBXp1klVjZmslnae8l7VU7XxawKQAjtSWkh9Hqdq1PgBQahCCBOCqAI7UnpKCECQAbaLyM2I+AThXuhc1oKS35N/TCvgEINXIaKfEKYouAGmUPD+Uqp3Pe8AJ3G7gIEhSKFuXI8t7RgWTcyfSCvi0gAMBHKkdFc2M7k8r0MoAVDgtnapd6wJQ8ZpAqnY+CzLXAb/5lK0DjVuQMbMBYG8or2JRsfgAe9LEB/834e0FnYlKBPEBdvgU8g2Al7E6Ekl88NSs6RuzYol/Brcx66+0gl4tIDl08GFRr6okovgAm3zEh2yzoe/ldKZyIosPGbTK8tpuQD8wI49HFbKOuOL3A3PMzGvKxbsFJAbfzOtVhcQUH2Cjr/iQ/YjSOOAQcGtWr1pCuUeUzOwfCpyJbQEbsogP+Y+p7mUUnJapmH7cMVWv0c8wmdeEk0MHa7LWawEvZhUfci7Km9nnwOY8dRvKJjPLlTmgaLKOPcC1eW00hAFcso5f81TOvS0lSdm1Cpeypa0IWJ1XfCi4L8jMttDuUdHGIrmCIMAiS/JusA13jrhN7ASWJUPz3ARZ5ZJ0NbCL9uSN2wssDJHINXTayq9ofiaVI7i0lcdDGAu2NzTpiB7GOdhUjuAStwYRHwJvzk0yyt6PG542je+AB8zscEijwXdHm9kJ3CnxXaFtR2QnsCBvYr5elLI9PemcluDm5ofK+I2KEC454TIzOxvbmVzIXVtSxe1IoRmQtCK2fkGQNF3SB5EFzcL7cqO6ZiFpkaTvI4vbi4NyKTmbi9z9Yc9L+jmu1v/hJ0lr1LL7xMZLWi2pP6LwByQ9rRLviBkV6OJVhqcqEL1WVxlGd+BS5HbgLQYeSr7nUnyoPIRLMr4Dt8d1R56Vq7KoVQBGImkql7/OdhJum+TwGeZzwCDuTNbwdbb7ceu0u312KXd0dHR0dHR0dHR0dFTFv6sskkiqZtEHAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
          <div className="bg-[#071a3a] smooth-transiton w-[250px] h-[100px] group-hover:translate-x-[175px]  absolute -left-[260px]" />
          <div className="bg-[#071a3a] w-[250px] smooth-transiton h-[100px] group-hover:-translate-x-[175px] absolute  -right-[250px]" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
