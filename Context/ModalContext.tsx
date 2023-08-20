"use client";

import ConfirmationModal from "@/components/modals/DeleteConfirmationModal";
import ExternalLinkModal from "@/components/modals/ExternalLinkModal";
import React, { useEffect, useState } from "react";

const ModalContext = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <ExternalLinkModal />
      <ConfirmationModal />
    </>
  );
};

export default ModalContext;