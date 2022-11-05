import { Style } from "@react-pdf/types";

export default function convertClassNameToComputedKey(args: {
  [key: string]: Style;
}) {
  return Object.entries(args).reduce((_, el) => ({ [`.${el[0]}`]: el[1] }), {});
}
