/**
 * Sensor integration
 * Source: https://github.com/home-assistant/core/blob/dev/homeassistant/components/alarm_control_panel/__init__.py
 */
import { IncludeList } from "../types";
import { PlatformSchema } from "../platform";
import { AlarmControlPanelPlatformSchema as MQTTPlatformSchema } from "./mqtt";
import { AlarmControlPanelPlatformSchema as TemplatePlatformSchema } from "./template";

export type Domain = "alarm_control_panel";
export type Schema = Item[] | IncludeList;
export type File = Item | Item[];

/**
 * @TJS-additionalProperties true
 */
interface OtherPlatform extends PlatformSchema {
  /**
   * @TJS-pattern ^(?!(mqtt|template)$)\w+$
   */
  platform: string;
}

type Item = MQTTPlatformSchema | TemplatePlatformSchema | OtherPlatform;
