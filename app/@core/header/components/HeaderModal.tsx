import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { NextButton } from "../../footer/components/EmblaCarouselArrowButtons";

const HeaderModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && event.target instanceof HTMLElement) {
        const modal = document.querySelector(".modal-content");
        if (modal && !modal.contains(event.target)) {
          onClose();
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  function closeModal() {
    onClose();
    setFullName("");
    setPhone("");
  }

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Full Name:", fullName);
    console.log("Phone:", phone);
    closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 z-50 h-full w-full flex justify-center items-center"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative p-5 bg-green text-white text-center w-[100%] max-sm:h-full md:w-[70%] lg:w-[60%] 2xl:w-[30%] sm:rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="button_wrapper absolute top-3 right-5">
              <NextButton onClick={closeModal} />
            </div>

            <div className="text-[18px] sm:text-[25px] mt-3 sm:mt-4">
              Обратный звонок
            </div>
            <div className="mb-3 text-[13px] sm:text-[16px]">
              Оставьте заявку, наш оператор свяжется с вами
            </div>
            <div className="bg-white w-[98%] sm:w-[80%] px-3 m-auto sm:pt-1 pb-12 rounded-b-full flex justify-center flex-col items-center">
              <label className="form-control w-full max-w-xs">
                <div className="label m-auto">
                  <span className="label-text text-green">ФИО</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full text-[#161616] max-w-xs m-auto"
                  value={fullName}
                  onChange={handleFullNameChange}
                />
                <div className="label m-auto">
                  <span className="label-text text-green">Телефон</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full text-[#161616] max-w-xs m-auto"
                  value={phone}
                  onChange={handlePhoneChange}
                />
                <div className="text-[#383838] text-[14px] mt-10">
                  Нажимая кнопку «Отправить заявку», <br /> вы подтверждаете
                  свое согласие на обработку <br /> персональных данных
                </div>
                <div>
                  <button
                    className="text-white bg-green btn btn-ghost hover:bg-green mt-5"
                    onClick={handleSubmit}
                  >
                    Отправить
                  </button>
                </div>
              </label>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderModal;
