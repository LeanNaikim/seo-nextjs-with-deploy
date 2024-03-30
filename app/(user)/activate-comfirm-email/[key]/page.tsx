import {ConfirmIcon} from "@/components/icons/Fontawesome";
import Button from './components/Button';
import style from './style.module.css';

type Props = {
  params: {
    key: string;
  };
  searchParams: any;
};  

export default function ComfirmEmail(props : Props) {
  return (
    <main className={style.container}>
      {/* comfirm Email Card */}
      <section className="flex flex-col items-center">
        {/* icon confirm */}
        <ConfirmIcon color="#080" classname="h-40 w-40 mb-8"/>  
        {/* title */}
        <h1 className="text-4xl my-4">Email has been Confirmed!</h1>
        {/* Description */}
        <p className="text-2xl">Your email comfirmed! you can go to login page by press below button!</p>
        <p className="text-2xl mt-4">សូមអរគុណសម្រាប់ការបញ្ជាក់អីមែល! អ្នកអាចចូលទៅទំព័រចូលដោយចុចលើប៉ូតុងខាងក្រាយ</p>
        {/* Button */}
        <Button title="Login" classname="my-8"></Button>
      </section>
    </main>
  )
} 
