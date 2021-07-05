import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaGoogle, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { AiOutlineQuestion } from 'react-icons/ai';
import { IconName } from 'src/types/icons';

export const iconComponents: Record<IconName, React.FC> = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagramSquare,
  google: FaGoogle,
  linkedin: FaLinkedin,
  'question-mark': AiOutlineQuestion,
  'you-tube': FaYoutube,
};
