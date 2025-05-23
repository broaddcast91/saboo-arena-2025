import React from "react";
// import { useEffect } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import Header from "../../components/header/Header";
import Dzire1 from "../../assets/banners/dzire.webp";
import { Tab } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { CgSpinner } from 'react-icons/cg';
import { Helmet } from "react-helmet";
import { CarEnquiryDown } from "../Forms/CarEnquiryDown";

function DzireCNG() {
  return (
    <>
      <Helmet>
        <title>
          Maruti Dzire CNG 2025 On-Road Price in Hyderabad – Starts at Rs. 8.44 Lakh at RKS Motor! Exclusive April 2025 Summer Offers on Maruti Dzire CNG – Limited-Time Deals!
        </title>
        <meta
          name="title"
          content="Maruti Dzire CNG 2025 On-Road Price in Hyderabad – Starts at Rs. 8.44 Lakh at RKS Motor! Exclusive April 2025 Summer Offers on Maruti Dzire CNG – Limited-Time Deals!"
        />
        <meta
          name="description"
          content="Maruti Dzire CNG 2025 Summer Offers – Best Price & Deals in Secunderabad & Hyderabad at Saboo RKS! Get the Maruti Dzire CNG with impressive mileage of 31.12 KMPL and exclusive April 2025 summer offers. Visit your nearest Saboo Maruti Showroom for the best prices, finance options, and limited-time discounts. You can also get the On-Road Price for Maruti Dzire CNG online and enjoy these fantastic summer deals! "
        />
        <meta
          name="keywords"
          content="2025 Summer Discounts on Maruti Dzire, Dzire 2025 On Road Price, Maruti Dzire April 2025 Offers, Maruti Dzire Service Center April 2025, Maruti Dzire Price in Hyderabad, Maruti Dzire On Road Price Hyderabad, Exclusive Summer Offers on Maruti Dzire 2025, Dzire 2025 Special Discounts, Maruti Dzire 2025 Limited-Time Offers, Maruti Suzuki Dzire 2025 Price and Offers, Dzire 2025 Offers in Hyderabad, Maruti Suzuki Dzire 2025 Summer Deals, Maruti Dzire 2025 Price and On Road Price in Hyderabad, Maruti Dzire 2025 Summer Savings, Maruti Suzuki Dzire 2025 Summer Promotions, Maruti Suzuki Dzire 2025 Service Center Near Me, 2025 Dzire Summer Deals, Maruti Suzuki Dzire Summer 2025 Offers."
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboomaruti.in/cng/maruti-swift-dzire-cng-on-road-price-in-hyderabad"
        />
        <meta
          property="og:title"
          content="Maruti Dzire CNG 2025 On-Road Price in Hyderabad – Starts at Rs. 8.44 Lakh at RKS Motor! Exclusive April 2025 Summer Offers on Maruti Dzire CNG – Limited-Time Deals!"
        />
        <meta
          property="og:description"
          content="Maruti Dzire CNG 2025 Summer Offers – Best Price & Deals in Secunderabad & Hyderabad at Saboo RKS! Get the Maruti Dzire CNG with impressive mileage of 31.12 KMPL and exclusive April 2025 summer offers. Visit your nearest Saboo Maruti Showroom for the best prices, finance options, and limited-time discounts. You can also get the On-Road Price for Maruti Dzire CNG online and enjoy these fantastic summer deals!"
        />
        <meta property="og:image" content="../img/og-tags/dzire.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://x.com/saboorksmaruti" />
        <meta
          property="twitter:title"
          content="Maruti Dzire CNG 2025 On-Road Price in Hyderabad – Starts at Rs. 8.44 Lakh at RKS Motor! Exclusive April 2025 Summer Offers on Maruti Dzire CNG – Limited-Time Deals!"
        />
        <meta
          property="twitter:description"
          content="Maruti Dzire CNG 2025 Summer Offers – Best Price & Deals in Secunderabad & Hyderabad at Saboo RKS! Get the Maruti Dzire CNG with impressive mileage of 31.12 KMPL and exclusive April 2025 summer offers. Visit your nearest Saboo Maruti Showroom for the best prices, finance options, and limited-time discounts. You can also get the On-Road Price for Maruti Dzire CNG online and enjoy these fantastic summer deals!"
        />
        <meta property="twitter:image" content="../img/og-tags/dzire.webp" />
      </Helmet>
      <Header />
      <img
  src={require("../../assets/banners/Dzire-cng-banner.webp")} 

       // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/dzire/Dzire_cng+web+banner.webp"
        className="w-full max-w-full lg:mt-16"
        alt="1"
      />
      <div className="container py-6 pt-6 mx-auto lg:px-0 md:px-3">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2">
          <div className="justify-between px-6 space-y-3">
            <p className="text-4xl font-bold uppercase">DZIRE S-CNG</p>
            <p className="font-bold text-green-900">
              8.44 lakh <sup>*</sup>
              <p className="font-light text-green-900">ex-show room price</p>
            </p>

            <p className="text-s">
            
PREMIUM PERFORMANCE, S-CNG EFFICIENCY
            </p>
            <br></br>
            <p className="text-s">
             The Dazzling-New Dzire with S-CNG offers more than just efficiency, it keeps the essence of what makes the Dzire truly special. With an exceptional fuel economy of km/kg, it maintains the refined performance and seamless drive the Dzire is renowned for. No compromises, just the perfect blend of performance and efficiency.
            </p>
            <br></br>
            <div className="flex flex-row">
              <div className="basis-1/1">
                <img
               
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/dzire/factory.webp"
                  className="w-full max-w-full pr-3"
                  alt="1"
                />
              </div>
              <div className="basis-1/1">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/dzire/performence.webp"
                  className="w-full max-w-full pr-3"
                  alt="1"
                />
              </div>
              <div className="basis-1/1">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/dzire/safetye.webp"
                  className="w-full max-w-full pr-3"
                  alt="1"
                />
              </div>
            </div>
          </div>
          <div className="object-contain object-left pt-5 h-70 w-100 pl-9">
          <img className="object-left "
          //  src={Dzire1}
          src = 'https://www.marutisuzuki.com/images/dzire_brand/images/threesixty/red.webp'
            alt="vehicle_banner" />{" "}
          </div>
        </div>
      </div>

      {/* insert form here  */}
      {/* <DzireCarEnquiry /> */}
      <CarEnquiryDown title="DZIRE CNG" carName="DZIRE CNG" />
      <div className="container py-6 pt-6 mx-auto lg:px-0 md:px-3">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2">
          <div className="justify-between px-6 space-y-3">
            <p className="text-4xl font-bold uppercase">DZIRE S-CNG features</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Accordian />
      </div>
    </>
  );
}

// const DzireCarEnquiry = ({ title, carName }) => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [model, setModel] = useState('Dzire CNg');
//   // const [method, setMethod] = useState();
//   const [loading, setLoading] = useState(false);
//   const [outlet, setOutlet] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   // Inside your component function
//   // const [showToast, setShowToast] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!name || !phone) {
//       toast.error('Please fill in all required fields.');
//       return;
//     }
//     setLoading(true);
//     try {
//       await axios
//         .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
//           name: name,
//           phone: phone,
//           // email: email,
//           model: model,
//           outlet: outlet,
//         })
//         .then((res) => {
//           toast.success('Enquiry sent successfully');
//         })
//         .catch((err) => {
//           setLoading(false);
//           toast.error('Something went wrong!');
//           console.log(err);
//         });
//     } catch (error) {
//       // toast.error("Something went wrong!");
//       setLoading(false);
//     }

//     try {
//       await axios
//         .post('https://arena-backend-git-main-arenas-projects.vercel.app/onRoadPrice', {
//           name: name,
//           phone: phone,
//           // email: email,
//           model: model,
//           outlet: outlet,
//         })
//         .then((res) => {
//           toast.success('Enquiry sent successfully');
//         })
//         .catch((err) => {
//           setLoading(false);
//           toast.error('Something went wrong!');
//           console.log(err);
//         });
//     } catch (error) {
//       // toast.error("Something went wrong!");
//       setLoading(false);
//     }

//     // Second API call
//     await axios
//       .get(
//         `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
//    Our Sales consultant will contact you shortly.

//    Regards
//    RKS Motor Pvt. Ltd.
//    98488 98488
//    www.saboomaruti.in
//    www.saboonexa.in&type=1&template_id=1407168967467983613`
//       )
//       .then((res) => {
//         console.log('SMS API Response:', res.data);
//         setSubmitted(true);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error sending SMS:', err);
//         setSubmitted(true);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     if (submitted) {
//       document.getElementById('arenaCarEnq2').submit();
//     }
//   }, [submitted]);

//   const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
//   if (phone !== '' && phone.length === 10) {
//     if (!pattern.test(phone)) {
//       toast.error('Enter valid phone number', {
//         theme: 'colored',
//       });
//     }
//   }

//   return (
//     <div className='py-12 mt-12 bg-blue-800'>
//       <div className='container px-5 mx-auto space-y-5 lg:px-0'>
//         <h3 className='text-xl font-normal text-white normal-case'>
//           Get Dzire CNG On-Road price in Hyderabad
//         </h3>
//         <form
//           id='arenaCarEnq2'
//           action={
//             pattern.test(phone) && phone.length === 10
//               ? 'https://crm.zoho.in/crm/WebToLeadForm'
//               : '#'
//           }
//           name='WebToLeads54158000083979838'
//           method={'POST'}
//           acceptCharset='UTF-8'
//         >
//           <input
//             type='text'
//             className='hidden'
//             name='xnQsjsdp'
//             value='c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529'
//           />
//           <input type='hidden' name='zc_gad' id='zc_gad' value='' />
//           <input
//             type='text'
//             className='hidden'
//             name='xmIwtLD'
//             value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
//           />
//           <input
//             type='text'
//             className='hidden'
//             name='actionType'
//             value='TGVhZHM='
//           />
//           <input
//             type='text'
//             className='hidden'
//             name='returnURL'
//             value='https://www.saboomaruti.in/thank-you-for-contact-us'
//           />
//           <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'>
//             <div>
//               <input
//                 className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
//                 placeholder='Name'
//                 id='Last_Name'
//                 name='Last Name'
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
//                 placeholder='Enter your phone number'
//                 minlength='10'
//                 maxlength='10'
//                 id='Phone'
//                 name='Phone'
//                 value={phone}
//                 required
//                 minLength='10'
//                 maxLength='10'
//                 onChange={(e) =>
//                   setPhone(
//                     e.target.value.replace(/[^1-9 ]/g, '') &&
//                       e.target.value.replace(/ /g, '')
//                   )
//                 }
//               />
//               {phone.length > 7 && phone.length < 10 ? (
//                 <small className='text-red-500'>
//                   Phone number must be 10 digits
//                 </small>
//               ) : !pattern.test(phone) && phone.length === 10 ? (  
//                 <small className='text-red-500'>Phone number is invalid</small>
//               ) : (
//                 ''
//               )}
//             </div>
//             <div>
//               <select
//                 id='LEADCF6'
//                 name='LEADCF6'
//                 onChange={(e) => setModel(e.target.value)}
//                 className='block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
//                 defaultValue='Dzire CNG'
//               >
//                 <option disabled>Select Model</option>

//                 <option value='Dzire CNg'>Dzire CNG</option>
//               </select>
//             </div>
//             <div>
//               <select
//                 id='LEADCF23'
//                 name='LEADCF23'
//                 onChange={(e) => {
//                   const selectedValue = e.target.value;

//                   // Check if the selected option is not "Select Outlet"
//                   if (selectedValue !== 'Select Outlet') {
//                     // Perform the backend call or set the model state here
//                     setOutlet(selectedValue);
//                   }
//                 }}
//                 defaultValue='Select Outlet'
//                 className='block w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
//               >
//                 <option disabled>Select Outlet</option>
//                 <option value='Somajiguda'>Somajiguda</option>
//                 <option value='Malakpet'>Malakpet</option>
//                 <option value='Secunderabad'>Secunderabad</option>
//                 <option value='Kushaiguda'>Kushaiguda</option>
//                 <option value='Kompally'>Kompally</option>
//                 <option value='Shamirpet'>Shamirpet</option>
//                 <option value='Narsingi'>Narsingi</option>
//                 <option value='Kodangal'>Kodangal</option>
//               </select>
//             </div>
//           </div>
//           {/* <div className='flex items-center my-3 space-x-1'>
//           <input id='comments' name='comments' type='checkbox' required />
//           <label htmlFor='comments' className='font-medium text-gray-200'>
//             I Agree
//           </label>
//         </div>
//         <p className='mb-2 text-gray-200'>
//           <span className='font-semibold'>Disclaimer :</span> I agree that
//           by clicking the ‘Submit’ button below, I am explicitly soliciting
//           a call / Message from Saboo Maruti (RKS Motor Pvt. Ltd) or its
//           Representatives on my ‘Mobile’
//         </p> */}
//           <button
//             type='submit'
//             onClick={handleSubmit}
//             className='inline-flex justify-center h-10 px-4 py-2 mt-4 mb-2 mr-3 text-sm font-medium text-white bg-red-800 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
//           >
//             {loading ? (
//               <div className='flex items-center justify-center'>
//                 <CgSpinner className='h-5 mr-2 text-white animate-spin' />
//                 Loading
//               </div>
//             ) : (
//               'SUBMIT'
//             )}
//           </button>
//           <div className='flex items-start py-1 '>
//             <div className='ml-2 text-sm'>
//               <label
//                 htmlFor='disclaimer'
//                 className='italic font-medium text-gray-700'
//               >
//                 <span className='font-bold text-white'>Disclaimer</span>
//                 <span className='text-white font-extralight'>
//                   : By clicking 'SUBMIT', you agree to our
//                 </span>
//                 <a
//                   href='/maruti-car-terms-and-conditions'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='px-2 text-sm font-bold text-red-700 '
//                 >
//                   Terms and Conditions
//                 </a>
//               </label>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

function Accordian() {
  return (
    <>
      <Tab.Group>
        <div className="flex items-center justify-end">
          <Tab.List className="p-5 space-x-1">
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-blue-800 text-gray-200 px-4 py-2 rounded shadow"
                  : "bg-gray-300 text-black hover:bg-blue-700 hover:text-gray-300 mb-3 px-4 py-2 rounded shadow"
              }
            >
              Features
            </Tab>

            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-blue-800 text-gray-200 px-4 py-2 rounded shadow"
                  : "bg-gray-300 text-black hover:bg-blue-700 hover:text-gray-300 mb-3 px-4 py-2 rounded shadow"
              }
            >
              Specifications
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* exterior */}
            <Tab.Panel>
              <div className="flex items-center justify-between bg-gray-100">
                <p className="flex-1 px-5 py-3 border">Features</p>
                <p className="flex-1 px-5 py-3 border">VXI CNG</p>
                <p className="flex-1 px-5 py-3 border">ZXI CNG</p>
              </div>

<Disclosure>
  {({ open }) => (
    <>
      <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
        <span className="text-base uppercase">Exterior</span>
        <ChevronDownIcon
          className={`${
            open ? "rotate-180 transform" : ""
          } h-5 w-5 text-black font-bold`}
        />
      </Disclosure.Button>

      <Disclosure.Panel className="pb-2 text-sm text-gray-500">
        {[
          ["Rear Combination LED lamp", "✔", "✔"],
          ["High Mounted LED Stop Lamp", "✔", "✔"],
          ["Body Coloured Door Handles", "✔", "✔"],
          ["Body Coloured ORVMs", "✔", "✔"],
          ["Side Turn Indicators on ORVMs", "✔", "✔"],
          ["Wheels", "Steel", "Alloy"],
          ["Wheel Cover", "✔", "-"],
          ["Door Outer - Weather Strip", "Black", "Chrome"],
          ["R15 Alloys (Painted)", "-", "✔"],
          ["R14 Steel Wheels", "✔", "-"],
          ["Full Wheel Covers", "✔", "-"],
          ["Sleek Line LED DRLs", "✔", "✔"],
          ["LED Crystal Vision Headlamps", "-", "✔"],
          ["FocusBeam Projector Headlamps", "-", "✔"],
          ["Chrome Finish - Front Grille", "-", "✔"],
          ["Chrome Finish - Trunk Lid Garnish", "-", "✔"],
          ["3D Trinity LED Rear Lamps Signature", "-", "✔"],
          ["LED High Mount Stop Lamp", "✔", "✔"],
          ["Shark Fin Antenna", "-", "✔"],
          ["Aero Boot Lip Spoiler", "-", "✔"],
          ["Belt Line Garnish", "Black", "Chrome"],
        ].map(([feature, variant1, variant2], idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-base"
          >
            <p className="flex-1 px-5 py-3 border">{feature}</p>
            <p className="flex-1 px-5 py-3 border">{variant1}</p>
            <p className="flex-1 px-5 py-3 border">{variant2}</p>
          </div>
        ))}
      </Disclosure.Panel>
    </>
  )}
</Disclosure>

              <Disclosure>
  {({ open }) => (
    <>
      <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
        <span className="text-base uppercase">INTERIOR</span>
        <ChevronDownIcon
          className={`${
            open ? "rotate-180 transform" : ""
          } h-5 w-5 text-black font-bold`}
        />
      </Disclosure.Button>

      <Disclosure.Panel className="pb-2 text-sm text-gray-500">
        {[
          ["Leather Wrapped Steering Wheel", "-", "✔"],
          ["Modern wood accent with Natural gloss finish", "✔", "✔"],
          ["Dual - Tone Interiors", "✔", "✔"],
          ["Multi - Information Display", "-", "✔"],
          ["Outside Temperature Display", "-", "✔"],
          ["Low - Fuel Warning Lamp", "✔", "✔"],
          ["Urban Satin Chrome Accents on Console, Gear Lever & Steering Wheel", "✔", "✔"],
          ["Front Door Lamp", "✔", "✔"],
          ["Tachometer", "✔", "✔"],
          ["Front Door Armrest with Fabric", "✔", "✔"],
          ["Co. Driver Side Sunvisor with Vanity Mirror", "✔", "✔"],
          ["Driver Side Sunvisor with Ticket Holder", "✔", "✔"],
          ["Urbane Satin Accents on Console, Door Trims", "✔", "✔"],
          ["Chrome Finish - AC Vents", "-", "✔"],
          ["Chrome Finish - Inside Door Handles", "-", "✔"],
          ["Chrome Accent On Parking Brake Lever Tip And Gear Shift Knob", "-", "✔"],
          ["IP Ornament Finish", "Satin Silver", "Satin Silver + Wood"],
          ["Front Dome Lamp", "✔", "✔"],
          ["Centre Room Lamp", "✔", "✔"],
          ["Speedometer with Tachometer", "✔", "✔"],
        ].map(([feature, variant1, variant2], idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-base"
          >
            <p className="flex-1 px-5 py-3 border">{feature}</p>
            <p className="flex-1 px-5 py-3 border">{variant1}</p>
            <p className="flex-1 px-5 py-3 border">{variant2}</p>
          </div>
        ))}
      </Disclosure.Panel>
    </>
  )}
</Disclosure>

         <Disclosure>
  {({ open }) => (
    <>
      <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
        <span className="text-base uppercase">SAFETY & SECURITY</span>
        <ChevronDownIcon
          className={`${
            open ? "rotate-180 transform" : ""
          } h-5 w-5 text-black font-bold`}
        />
      </Disclosure.Button>
      <Disclosure.Panel className="pb-2 text-sm text-gray-500">
        {[
          ["Reverse Parking Camera", "-", "✔"],
          ["Tyre Pressure Monitoring System (TPMS)", "-", "✔"],
          ["Day/Night Adjustable Inside Rear View Mirror", "✔", "✔"],
          ["Speed-Sensitive Auto Door Locking", "✔", "✔"],
          ["Rear Defogger", "✔", "✔"],
          ["Engine Immobilizers", "✔", "✔"],
          ["6 Airbags (Front, Side and Curtain)", "-", "✔"],
          ["High-Speed Warning Alert", "✔", "✔"],
          ["3-Point Seat Belts for all Seats", "✔", "✔"],
          ["Seat Belt Reminder Lamp & Buzzer (all occupants)", "-", "✔"],
          ["Suzuki HEARTECT Body", "✔", "✔"],
          ["Electronic Stability Program (ESP)", "-", "✔"],
          ["Hill Hold Assist", "-", "✔"],
          ["ABS with EBD", "✔", "✔"],
          ["Reverse Parking Sensors", "✔", "✔"],
          ["ISOFix Child Seat Anchorages", "✔", "✔"],
          ["Front Seat Belt with Pre-Tensioner & Force Limiter", "✔", "✔"],
        ].map(([feature, variant1, variant2], idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-base"
          >
            <p className="flex-1 px-5 py-3 border">{feature}</p>
            <p className="flex-1 px-5 py-3 border">{variant1}</p>
            <p className="flex-1 px-5 py-3 border">{variant2}</p>
          </div>
        ))}
      </Disclosure.Panel>
    </>
  )}
</Disclosure>

<Disclosure>
  {({ open }) => (
    <>
      <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
        <span className="text-base uppercase">INFOTAINMENT</span>
        <ChevronDownIcon
          className={`${
            open ? "rotate-180 transform" : ""
          } h-5 w-5 text-black font-bold`}
        />
      </Disclosure.Button>
      <Disclosure.Panel className="pb-2 text-sm text-gray-500">
        {[
          ["SmartPlay Pro with 17.78 cm Touchscreen", "✔", "✔"],
          ["Android Auto and Apple CarPlay", "Wireless", "Wireless"],
          ["Remote Control App for Infotainment", "✔", "✔"],
          ["Steering Mounted Audio & Calling Controls", "✔", "✔"],
          ["Over The Air Updates (OTA) using Smartphone", "✔", "✔"],
          [
            'Onboard Voice Assistant (Wake-up Through "Hi Suzuki" with Barge-in Feature)',
            "✔",
            "✔",
          ],
          ["USB & Bluetooth Connectivity", "✔", "✔"],
          ["Speakers (4 nos.)", "✔", "✔"],
          ["Tweeters (2 nos.)", "_", "✔"],
        ].map(([feature, variant1, variant2], idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-base"
          >
            <p className="flex-1 px-5 py-3 border">{feature}</p>
            <p className="flex-1 px-5 py-3 border">{variant1}</p>
            <p className="flex-1 px-5 py-3 border">{variant2}</p>
          </div>
        ))}
      </Disclosure.Panel>
    </>
  )}
</Disclosure>



            <Disclosure>
  {({ open }) => (
    <>
      <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
        <span className="text-base uppercase">COMFORT & CONVENIENCE</span>
        <ChevronDownIcon
          className={`${
            open ? "rotate-180 transform" : ""
          } h-5 w-5 text-black font-bold`}
        />
      </Disclosure.Button>
      <Disclosure.Panel className="pb-2 text-sm text-gray-500">
        {[
          ["Wireless Charger", "_", "✔"],
          ["Engine Push Start-Stop Button with Smart Key", "_", "✔"],
          ["Auto headlamps with Follow Me Home & Lead Me to Vehicle", "_", "✔"],
          ["Key-fob operated Trunk opening", "_", "✔"],
          ["Luggage Room Lamp", "", ""],
          ["Rear AC Vent", "✔", "✔"],
          ["Rear Seat Center Armrest with Cup Holder", "✔", "✔"],
          ["Front USB (Type A)", "✔", "✔"],
          ["Rear Fast Charging USB (Type A and C) with phone pocket", "✔", "✔"],
          ["Electrically Adjustable Outside Rear View Mirrors", "✔", "✔"],
          ["Electrically Foldable Outside Rear View Mirrors", "✔", "✔"],
          ["Height Adjustable Driver Seat", "✔", "✔"],
          ["Power Windows (Front + Rear)", "✔", "✔"],
          ["Gear Shift Indicator", "✔", "✔"],
          ["Electromagnetic trunk opening", "✔", "✔"],
          ["Adjustable Front Seat Headrests", "✔", "✔"],
          ["Auto Up Down and Pinch Guard Power Window (Driver)", "✔", "✔"],
          ["Driver Side Footrest", "✔", "✔"],
          ["Front Accessory Socket", "✔", "✔"],
          ["Remote Keyless Entry System", "✔", "✔"],
          ["Central Locking", "✔", "✔"],
          ["Power & Tilt Steering", "✔", "✔"],
          ["Bottle Holder on All Doors", "✔", "✔"],
          ["Digital Air Conditioner with Panel Illumination", "Manual", "Auto"],
        ].map(([feature, variant1, variant2], idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-base"
          >
            <p className="flex-1 px-5 py-3 border">{feature}</p>
            <p className="flex-1 px-5 py-3 border">{variant1}</p>
            <p className="flex-1 px-5 py-3 border">{variant2}</p>
          </div>
        ))}
      </Disclosure.Panel>
    </>
  )}
</Disclosure>
<Disclosure>
  {({ open }) => (
    <>
      <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
        <span className="text-base uppercase">SUZUKI CONNECT</span>
        <ChevronDownIcon
          className={`${
            open ? "rotate-180 transform" : ""
          } h-5 w-5 text-black font-bold`}
        />
      </Disclosure.Button>
      <Disclosure.Panel className="pb-2 text-sm text-gray-500">
        {[
          ["Emergency Alerts", "_", "✔"],
          ["Breakdown Notification", "_", "✔"],
          ["Stolen Vehicle Notification & Tracking", "_", "✔"],
          ["Tow-away and Tracking", "_", "✔"],
          ["Geo-fence", "_", "✔"],
          ["Time fence", "_", "✔"],
          ["Valet Alert", "_", "✔"],
          ["Trip Summary", "_", "✔"],
          ["Driving Behaviour", "_", "✔"],
          ["Share Trip History", "_", "✔"],
          ["Area Guidance", "_", "✔"],
          ["Vehicle Location Sharing", "_", "✔"],
          ["Overspeeding", "_", "✔"],
          ["Seatbelt", "_", "✔"],
          ["AC Idling", "_", "✔"],
          ["Trip (Start & End)", "_", "✔"],
          ["Low Fuel", "_", "✔"],
          ["Low Range", "_", "✔"],
          ["Dashboard View", "_", "✔"],
          ["Door Lock/Cancel Lock", "_", "✔"],
          ["Hazard Light On/Off", "", "✔"],
          ["Headlight Off", "_", "✔"],
          ["Alarm", "_", "✔"],
          ["Immobiliser Request", "_", "✔"],
          ["Battery Health", "_", "✔"],
          ["Smartwatch Connectivity", "_", "✔"],
          ["Alexa Skill Connectivity", "_", "✔"],
        ].map(([feature, variant1, variant2], idx) => (
          <div key={idx} className="flex items-center justify-between text-base">
            <p className="flex-1 px-5 py-3 border">{feature}</p>
            <p className="flex-1 px-5 py-3 border">{variant1}</p>
            <p className="flex-1 px-5 py-3 border">{variant2}</p>
          </div>
        ))}
      </Disclosure.Panel>
    </>
  )}
</Disclosure>


            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <div className="flex items-center justify-between bg-gray-100">
                <p className="flex-1 px-5 py-3 border">Specifications</p>
                <p className="flex-1 px-5 py-3 border">VXI CNG</p>
                <p className="flex-1 px-5 py-3 border">ZXI CNG</p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Dimensions</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Overall Length
                        </p>
                        <p className="flex-1 px-5 py-3 border">3995 mm</p>
                        <p className="flex-1 px-5 py-3 border">3995 mm</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Overall Width
                        </p>
                        <p className="flex-1 px-5 py-3 border">1735 mm</p>
                        <p className="flex-1 px-5 py-3 border">1735 mm</p>
                      </div>

                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Overall Height
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          1525 mm (Unladen)
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          1525 mm (Unladen)
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Wheelbase</p>
                        <p className="flex-1 px-5 py-3 border">2450 mm</p>
                        <p className="flex-1 px-5 py-3 border">2450 mm</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">ENGINE</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Capacity</p>
                        <p className="flex-1 px-5 py-3 border">1197 cc</p>
                        <p className="flex-1 px-5 py-3 border">1197 cc</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Number of Cylinders
                        </p>
                        <p className="flex-1 px-5 py-3 border">4</p>
                        <p className="flex-1 px-5 py-3 border">4</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Max Power (CNG)
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          57.0 kW @6000 rpm
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          57.0 kW @6000 rpm
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Max Torque (CNG)
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          98.5 Nm @4300 rpm
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          98.5 Nm @4300 rpm
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Transmission</p>
                        <p className="flex-1 px-5 py-3 border">5MT</p>
                        <p className="flex-1 px-5 py-3 border">5MT</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">
                        Suspension System
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Front</p>
                        <p className="flex-1 px-5 py-3 border">
                          MacPherson strut
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          MacPherson strut
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Rear</p>
                        <p className="flex-1 px-5 py-3 border">Torsion Beam</p>
                        <p className="flex-1 px-5 py-3 border">Torsion Beam</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Steering</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Turning Radius
                        </p>
                        <p className="flex-1 px-5 py-3 border">4.8 m</p>
                        <p className="flex-1 px-5 py-3 border">4.8 m</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Power Steering Type
                        </p>
                        <p className="flex-1 px-5 py-3 border ">Electric</p>
                        <p className="flex-1 px-5 py-3 border">Electric</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Brakes</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Front</p>
                        <p className="flex-1 px-5 py-3 border">Disc</p>
                        <p className="flex-1 px-5 py-3 border">Disc</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Rear</p>
                        <p className="flex-1 px-5 py-3 border">Drum</p>
                        <p className="flex-1 px-5 py-3 border">Drum</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
                      <span className="text-base uppercase">Others</span>
                      <ChevronDownIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-2 text-sm text-gray-500">
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Fuel Tank Capacity
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          PETROL: 37 CNG: 55L (water equivalent)
                        </p>
                        <p className="flex-1 px-5 py-3 border">
                          PETROL: 37 CNG: 55L (water equivalent)
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">Kerb Weight</p>
                        <p className="flex-1 px-5 py-3 border">990-995 KG</p>
                        <p className="flex-1 px-5 py-3 border">990-995 KG</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Gross Vehcile Weight
                        </p>
                        <p className="flex-1 px-5 py-3 border">1405 KG</p>
                        <p className="flex-1 px-5 py-3 border">1405 KG</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Seating Capacity
                        </p>
                        <p className="flex-1 px-5 py-3 border">5</p>
                        <p className="flex-1 px-5 py-3 border">5</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Tyre Size (Steel)
                        </p>
                        <p className="flex-1 px-5 py-3 border">165/80 R14</p>
                        <p className="flex-1 px-5 py-3 border">165/80 R14</p>
                      </div>
                      <div className="flex items-center justify-between text-base">
                        <p className="flex-1 px-5 py-3 border ">
                          Tyre Size (Alloy)
                        </p>
                        <p className="flex-1 px-5 py-3 border">185/65 R15</p>
                        <p className="flex-1 px-5 py-3 border">185/65 R15</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
      <br></br>
      <div className="px-5 text-xs">
        <p>
          <sup>*</sup>Black glass on the vehicles is due to lighting effect.
        </p>
        <p>
          <sup>*</sup>
          <sup>*</sup>Car models and accessories shown may vary from actual
          product. Images are used for illustration purpose only.
        </p>
        <p>
          <sup>*</sup>Test results are Rule 115 of CMVR, 1989.
        </p>
        <p>
          <sup>*</sup>Prices shown above are ex showroom Delhi.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2">
        <div className="px-6 my-auto space-y-3 text-left">
          <p className="text-4xl font-bold uppercase">DZIRE S-CNG FAQ's</p>
        </div>
        <div className="object-contain object-right h-50 w-100 pt-14">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none">
                  <span className="text-base font-bold uppercase">
                    1. WHAT ARE THE DIFFERENT MODES FOR DRIVING THE NEW DZIRE
                    S-CNG?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 text-sm tracking-normal">
                  <br></br>
                  <p className="indent-8">
                    The new Dzire S-CNG let you choose from basically the
                    following three fuel modes: -
                  </p>
                  <br />
                  <ul className="list-disc">
                    <li>
                      Petrol Mode: In this mode, the car starts and drives on
                      petrol.
                    </li>
                  </ul>
                  <ul className="list-disc">
                    <li>
                      Auto Mode: In this mode, the car starts on petrol and
                      automatically switches over to CNG. This one is a highly
                      recommended fuel mode.
                    </li>
                  </ul>
                  <ul className="list-disc">
                    <li>
                      Forced CNG mode: In this mode, the car gets started on
                      CNG. This is advised to be used only when there is
                      absolutely no petrol left in the car.
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none">
                  <span className="text-base font-bold uppercase">
                    2. IS THE CNG KIT IN DZIRE S-CNG TESTED FOR SAFETY ?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 text-sm tracking-normal">
                  <br></br>
                  <p className="indent-8">
                    Dzire S-CNG is extensively tested with the CNG setup in
                    place to offer enhanced performance and durability. The car
                    boasts of a leak-proof design, sturdy pipe-line structure
                    made of stainless steel and joints which are
                    corrosion-resistant as well. It comes with an integrated
                    wiring harness which eliminates the chances of short
                    circuits. This means the safety quotient is also well-taken
                    care of in this car.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none">
                  <span className="text-base font-bold uppercase">
                    3. CAN I GET MY NEW DZIRE S-CNG TUNED FROM OUTSIDE ?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 text-sm tracking-normal">
                  <br></br>
                  <p className="indent-8">
                    Getting your new Dzire S-CNG tuned from an unauthorized
                    workshop is not advised. Each component of the Maruti Suzuki
                    factory-fitted S-CNG system is integrated into the car by
                    specialized experts. The right tuning equipment to calibrate
                    the kit properly will only be available at a Maruti Suzuki
                    authorized service center. So, it is recommended to visit
                    the nearest Maruti Suzuki Arena service workshops for the
                    same.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none">
                  <span className="text-base font-bold uppercase">
                    4. HOW FREQUENTLY SHOULD I GET THE S-CNG KIT CHECKED?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 text-sm tracking-normal">
                  <br></br>
                  <p className="indent-8">
                    It is recommended to get the kit checked at least once in
                    three years for better service. This includes the CNG
                    pipeline setup, electrical harness, and the CNG tank itself
                    which has a tank capacity of 60L (water equivalent). You can
                    visit the nearest service centre for the same.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}

export default DzireCNG;
