
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
   children: ReactNode;
   size?: 's' | 'm' | 'l';
   // width: '300' | '400' | '500'
}