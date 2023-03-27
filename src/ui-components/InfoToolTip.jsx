import { StatefulTooltip, PLACEMENT } from "baseui/tooltip";
import { Block } from "baseui/block";
import { ReactComponent as InfoIcon } from "/img/info.svg";

export default function InfoToolTip({ infoToolTipContent }) {
  return (
    <StatefulTooltip
      content={() => (
        <Block width={"300px"}>
          {infoToolTipContent.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </Block>
      )}
      placement={PLACEMENT.top}
      showArrow
      returnFocus
      autoFocus
    >
      <Block>
        <InfoIcon width={"15px"} height={"15px"} />
      </Block>
    </StatefulTooltip>
  );
}
