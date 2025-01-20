import React from 'react'

function SkillCard(props) {
    const {languageName,visibility}=props;
  return (
    <div>
      <div onClick={visibility}
  class="overflow-hidden w-64 text-center before:ease-in-out after:ease-in-out bg-white group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-[#11BE86] duration-300 py-2     px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-[url('https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__')] before:duration-300 before:-z-1 before:bg-[#11BE86] before:absolute before:top-0 before:left-0"
>
  <h4
    class="font-medium text-lg duration-300 group-hover:text-white group-hover:z-[5]"
  >
    {languageName}
  </h4>
  
  <div className='flex justify-center'>
  <button 
  class="cursor-pointer w-max   bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
>
  <svg
    class="w-5 h-5"
    stroke="currentColor"
    stroke-width="2"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
</button>
</div>
</div>
    </div>
  )
}

export default SkillCard
