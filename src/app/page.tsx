"use client";

import { Modal } from "@/components";
import { FundingLayout } from "@/layouts";
import { useState } from "react";

export default function Page() {
  const [type, setType] = useState<"감정" | "일정" | "위치">("감정");
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <>
      <FundingLayout setType={setType} setIsModal={setIsModal} />
      {isModal && <Modal type={type} setIsModal={setIsModal} />}
    </>
  );
}
