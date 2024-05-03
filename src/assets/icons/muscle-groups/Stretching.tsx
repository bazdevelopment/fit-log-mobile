import { Path, Svg } from "react-native-svg";

import { ISvgProps } from "../../../types/svg.types";

const SvgComponent = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 100 125" {...props}>
    <Path
      fill={props.color}
      d="M78.5 88.346c-2.593-1.831-1.32-23.071-1.32-23.071-.101-6.37-1.299-8.28-2.141-8.851-.014 2.658-.233 5.901-.658 9.73.149 1.11 1.611 12.266.806 15.864l-.194 2.805c.125.71.694 4.331-.164 6.362l5.25.137c2.898.305 1.784-1.44 1.784-1.44L78.5 88.346zm12.761-73.342-4.044 3.355-2.872 2.052c-2.947 1.855-8.578 6.674-8.578 6.674a2.504 2.504 0 0 1-1.678 1.22c-3.966 1.983-7.322 5.339-7.322 5.339-3.966 4.729-6.407 6.102-6.407 6.102-2.136.915-4.729 5.034-4.729 5.034-2.441 1.068-7.244 9-7.244 9-4.193 3.508-6.027 8.39-6.027 8.39-3.051 1.373-9 10.22-9 10.22l-4.576 4.119c-6.864 2.136-10.678 7.017-10.678 7.017l-4.119 3.051-4.727 4.575s-1.983 3.661 3.051 2.288c0 0 .305-2.746 1.83-2.746 0 0 .915-.153 1.22-1.525l2.746-1.983s9.152-2.288 12.203-5.491c0 0 6.254-2.441 8.542-5.491 0 0 7.936-3.813 9.536-5.797 0 0 .532-.915 4.04-.61 0 0 11.288.305 15.712-4.271l1.122-.306c-.957-3.582-1.052-6.499-1.027-7.854-2.907.717-6.77 1.706-6.812 1.716a.59.59 0 0 1-.451-1.08c2.3-1.38 7.718-3.618 7.948-3.713a.59.59 0 0 1 .813.615l-.313 2.734c-.003 1.64.185 5.159 1.575 9.223a.591.591 0 0 1 .032.208c-.114 4.057-.108 15.133 1.28 17.628.081.146.097.32.044.478-.697 2.054.692 4.181 1.523 5.211.466-1.572.142-4.333-.057-5.422a.559.559 0 0 1-.008-.147l.202-2.923a.592.592 0 0 1 .014-.094c.805-3.443-.809-15.435-.825-15.556a.586.586 0 0 1-.002-.145c1.529-13.712.027-16.622-.69-17.236-.193-.165-.321-.138-.334-.134-.275.169-.527.038-.702-.231-.727-1.115-.937-1.951-.661-2.632.387-.955 1.57-1.224 2.823-1.508.54-.122 1.098-.249 1.618-.431 2.556-.895 3.702-1.896 4.38-3.827.659-1.876-1.501-4.107-1.523-4.129a.585.585 0 0 1-.064-.076c-.033-.042-1.021-1.256-3.999-.157a.593.593 0 0 1-.573-.092c-.077-.058-.295-.171-.448-.127-.143.041-.294.243-.413.553a.593.593 0 0 1-.528.379c-.008.001-1.14.067-1.528.844a.593.593 0 0 1-.509.327c-.007.001-.197.023-.305.203-.099.164-.267.693.304 2.057a.594.594 0 0 1-.032.523l-.952 1.663a.592.592 0 0 1-1.027-.589l.81-1.415c-.482-1.262-.513-2.233-.092-2.89.263-.41.628-.592.898-.672.55-.818 1.484-1.095 2.005-1.188.262-.502.617-.817 1.06-.938.479-.131.916.014 1.192.154.061-.021.117-.035.177-.054 1.864-1.732 4.276-5.406 4.276-5.406 3.356-2.288 9.536-8.658 9.536-8.658s1.592-2.024 2.987-3.115c1.273-.997 1.39-3.027.377-2.293z"
    />
  </Svg>
);
export default SvgComponent;
