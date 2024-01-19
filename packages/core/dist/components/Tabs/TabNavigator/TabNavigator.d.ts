/// <reference types="react" />
import { TabNavigatorProps } from "../types";
export declare const TabNavigator: import("styled-components").StyledComponent<"ul", any, {
    hidden?: boolean | undefined;
    dir?: string | undefined;
    slot?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    title?: string | undefined;
    color?: string | undefined;
    translate?: "yes" | "no" | undefined;
    prefix?: string | undefined;
    children?: import("react").ReactNode;
    key?: import("react").Key | null | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    role?: import("react").AriaRole | undefined;
    tabIndex?: number | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: (boolean | "false" | "true") | undefined;
    'aria-autocomplete'?: "both" | "none" | "inline" | "list" | undefined;
    'aria-busy'?: (boolean | "false" | "true") | undefined;
    'aria-checked'?: boolean | "mixed" | "false" | "true" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "time" | "page" | "false" | "true" | "step" | "location" | "date" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: (boolean | "false" | "true") | undefined;
    'aria-dropeffect'?: "link" | "none" | "copy" | "move" | "execute" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: (boolean | "false" | "true") | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: (boolean | "false" | "true") | undefined;
    'aria-haspopup'?: boolean | "dialog" | "menu" | "listbox" | "grid" | "false" | "true" | "tree" | undefined;
    'aria-hidden'?: (boolean | "false" | "true") | undefined;
    'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: (boolean | "false" | "true") | undefined;
    'aria-multiline'?: (boolean | "false" | "true") | undefined;
    'aria-multiselectable'?: (boolean | "false" | "true") | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "mixed" | "false" | "true" | undefined;
    'aria-readonly'?: (boolean | "false" | "true") | undefined;
    'aria-relevant'?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: (boolean | "false" | "true") | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: (boolean | "false" | "true") | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "other" | "ascending" | "descending" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: import("react").ClipboardEventHandler<HTMLUListElement> | undefined;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLUListElement> | undefined;
    onCut?: import("react").ClipboardEventHandler<HTMLUListElement> | undefined;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLUListElement> | undefined;
    onPaste?: import("react").ClipboardEventHandler<HTMLUListElement> | undefined;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLUListElement> | undefined;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLUListElement> | undefined;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLUListElement> | undefined;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLUListElement> | undefined;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLUListElement> | undefined;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLUListElement> | undefined;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLUListElement> | undefined;
    onFocus?: import("react").FocusEventHandler<HTMLUListElement> | undefined;
    onFocusCapture?: import("react").FocusEventHandler<HTMLUListElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLUListElement> | undefined;
    onBlurCapture?: import("react").FocusEventHandler<HTMLUListElement> | undefined;
    onChange?: import("react").FormEventHandler<HTMLUListElement> | undefined;
    onChangeCapture?: import("react").FormEventHandler<HTMLUListElement> | undefined;
    onBeforeInput?: import("react").FormEventHandler<HTMLUListElement> | undefined;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLUListElement> | undefined;
    onInput?: import("react").FormEventHandler<HTMLUListElement> | undefined;
    onInputCapture?: import("react").FormEventHandler<HTMLUListElement> | undefined;
    onReset?: import("react").FormEventHandler<HTMLUListElement> | undefined;
    onResetCapture?: import("react").FormEventHandler<HTMLUListElement> | undefined;
    onSubmit?: import("react").FormEventHandler<HTMLUListElement> | undefined;
    onSubmitCapture?: import("react").FormEventHandler<HTMLUListElement> | undefined;
    onInvalid?: import("react").FormEventHandler<HTMLUListElement> | undefined;
    onInvalidCapture?: import("react").FormEventHandler<HTMLUListElement> | undefined;
    onLoad?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onLoadCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onError?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onErrorCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onKeyDown?: import("react").KeyboardEventHandler<HTMLUListElement> | undefined;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLUListElement> | undefined;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLUListElement> | undefined;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLUListElement> | undefined;
    onKeyUp?: import("react").KeyboardEventHandler<HTMLUListElement> | undefined;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLUListElement> | undefined;
    onAbort?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onAbortCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onCanPlay?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onDurationChange?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onEmptied?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onEncrypted?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onEnded?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onEndedCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onLoadedData?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onLoadStart?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onPause?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onPauseCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onPlay?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onPlayCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onPlaying?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onProgress?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onProgressCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onRateChange?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onSeeked?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onSeeking?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onStalled?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onStalledCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onSuspend?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onVolumeChange?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onWaiting?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onAuxClick?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onClick?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onClickCapture?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onContextMenu?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onDoubleClick?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onDrag?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDragCapture?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDragEnd?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDragEndCapture?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDragEnter?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDragExit?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDragExitCapture?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDragLeave?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDragOver?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDragOverCapture?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDragStart?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDragStartCapture?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDrop?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onDropCapture?: import("react").DragEventHandler<HTMLUListElement> | undefined;
    onMouseDown?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onMouseLeave?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onMouseMove?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onMouseOut?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onMouseOver?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onMouseUp?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLUListElement> | undefined;
    onSelect?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onSelectCapture?: import("react").ReactEventHandler<HTMLUListElement> | undefined;
    onTouchCancel?: import("react").TouchEventHandler<HTMLUListElement> | undefined;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLUListElement> | undefined;
    onTouchEnd?: import("react").TouchEventHandler<HTMLUListElement> | undefined;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLUListElement> | undefined;
    onTouchMove?: import("react").TouchEventHandler<HTMLUListElement> | undefined;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLUListElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLUListElement> | undefined;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLUListElement> | undefined;
    onPointerDown?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerMove?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerUp?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerCancel?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerEnter?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerEnterCapture?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerLeave?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerLeaveCapture?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerOver?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerOut?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLUListElement> | undefined;
    onScroll?: import("react").UIEventHandler<HTMLUListElement> | undefined;
    onScrollCapture?: import("react").UIEventHandler<HTMLUListElement> | undefined;
    onWheel?: import("react").WheelEventHandler<HTMLUListElement> | undefined;
    onWheelCapture?: import("react").WheelEventHandler<HTMLUListElement> | undefined;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLUListElement> | undefined;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLUListElement> | undefined;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLUListElement> | undefined;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLUListElement> | undefined;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLUListElement> | undefined;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLUListElement> | undefined;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLUListElement> | undefined;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLUListElement> | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    contentEditable?: "inherit" | (boolean | "false" | "true") | undefined;
    contextMenu?: string | undefined;
    draggable?: (boolean | "false" | "true") | undefined;
    placeholder?: string | undefined;
    spellCheck?: (boolean | "false" | "true") | undefined;
    radioGroup?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "search" | "numeric" | "none" | "text" | "decimal" | "tel" | "url" | "email" | undefined;
    is?: string | undefined;
    ref?: ((instance: HTMLUListElement | null) => void) | import("react").RefObject<HTMLUListElement> | null | undefined;
    theme: any;
    className: string;
} & TabNavigatorProps, "hidden" | "dir" | "slot" | "style" | "title" | "color" | "translate" | "prefix" | "children" | "ref" | "key" | "className" | "id" | "lang" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "theme" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "draggable" | "placeholder" | "spellCheck" | "radioGroup" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is">;
