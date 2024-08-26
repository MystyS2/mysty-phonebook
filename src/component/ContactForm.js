import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [count, setCount] = useState(0);
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const dispatch = useDispatch();

  const addContect = (e) => {
    e.preventDefault();
    setCount(count+1);
    dispatch({type: "ADD_CONTACT", payload:{index:count, name, phoneNumber}});
    setName('');
    setPhoneNumber('');
  };

  const parsingPhoneNumber = (num) => {
    return (
      num
        /*
         * 숫자를 제외한 값 모두 제외
         * 0[0-1][0-9]로 제한하는 것도 가능
         */
        .replace(/[^0-9]/g, "")
        /*
         *  0자리 부터 3자리까지 첫번째 '-' 전에 위치
         *  첫번째 '-'에서 0 자리부터 4자리까지 후에 '-' 위치
         *  마지막 '-'에서 4자리  숫자
         */
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        //'-'기호는 한번에서 두번만 적용
        .replace(/(-{1,2})$/g, "")
    );
  };
  return (
    <div>
      <Button
        onPress={onOpen}
        color="danger"
        variant="ghost"
        className="h-[56px] shadow-lg text-white backdrop-blur-xl backdrop-saturate-150"
      >
        Add new number
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#ff2a71] bg-[#cba4b1] dark:bg-[#19172c] text-[#ff2a71]",
          header: "border-b-[1px] border-[#ff2a71]",
          footer: "border-t-[1px] border-[#ff2a71]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={addContect}>
              <ModalHeader className="flex flex-col gap-1">
                Add new number
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={<FontAwesomeIcon icon={faUser} />}
                  label="Name"
                  color="danger"
                  placeholder="Enter name"
                  variant="bordered"
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  endContent={<FontAwesomeIcon icon={faPhone} />}
                  label="Phone Number"
                  color="danger"
                  placeholder="Phone number"
                  type="tel"
                  value={phoneNumber}
                  variant="bordered"
                  onChange={(e) => {
                    setPhoneNumber(
                      parsingPhoneNumber(e.currentTarget.value)
                    );
                  }}
                  maxLength="13"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="foreground"
                  onPress={onClose}
                  className="bg-[#ffffff33] shadow-lg shadow-[#c08c8a]"
                >
                  Close
                </Button>
                <Button
                  className="bg-[#ffffff33] shadow-lg shadow-[#c08c8a]"
                  onPress={onClose}
                  type="submit"
                >
                  Add
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ContactForm;
