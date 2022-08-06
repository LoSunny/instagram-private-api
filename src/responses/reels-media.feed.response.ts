export interface ReelsMediaFeedResponseRootObject {
  reels: ReelsMediaFeedResponseReels;
  status: string;
}
export interface ReelsMediaFeedResponseReels {
  [pk: string]: ReelsMediaFeedResponse;
}
export interface ReelsMediaFeedResponse {
  id: number;
  latest_reel_media: number;
  expiring_at: number;
  seen: number;
  can_reply: boolean;
  can_reshare: boolean;
  reel_type: string;
  user: ReelsMediaFeedResponseUser;
  items: ReelsMediaFeedResponseItem[];
  prefetch_count: number;
  media_count: number;
}
export interface ReelsMediaFeedResponseUser {
  pk: number;
  username?: string;
  full_name?: string;
  is_private?: boolean;
  profile_pic_url?: string;
  profile_pic_id?: string;
  friendship_status?: ReelsMediaFeedResponseFriendshipStatus;
  is_verified?: boolean;
}
export interface ReelsMediaFeedResponseFriendshipStatus {
  following: boolean;
  is_private: boolean;
  incoming_request: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}
export interface ReelsMediaFeedResponseItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  image_versions2: ReelsMediaFeedResponseImageVersions2;
  original_width: number;
  original_height: number;
  caption_position: number;
  is_reel_media: boolean;
  is_dash_eligible: number;
  video_dash_manifest: string;
  video_codec: string;
  number_of_qualities: number;
  video_versions: ReelsMediaFeedResponseVideoVersionsItem[];
  has_audio: boolean;
  video_duration: number;
  user: ReelsMediaFeedResponseUser;
  caption_is_edited: boolean;
  photo_of_you: boolean;
  caption: null;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  expiring_at: number;
  can_reshare: boolean;
  can_reply: boolean;
  reel_mentions?: ReelsMediaFeedResponseReelMentionsItem[];
  supports_reel_reactions: boolean;
  show_one_tap_fb_share_tooltip: boolean;
  has_shared_to_fb: number;
  ad_action?: string;
  link_text?: string;
  story_cta?: ReelsMediaFeedResponseStoryCtaItem[];
  imported_taken_at?: number;
  story_polls?: ReelsMediaFeedResponseStoryPollsItem[];
  story_questions?: ReelsMediaFeedResponseStoryQuestionsItem[];
  story_quizs?: ReelsMediaFeedResponseStoryQuizsItem[];
  story_sliders?: ReelsMediaFeedResponseStorySlidersItem[];
  story_countdowns?: ReelsMediaFeedResponseStoryCountdownsItem[];
  story_feed_media?: ReelsMediaFeedResponseFeedMedia[];
  story_locations?: ReelsMediaFeedResponseStoryLocation[];
  location?: ReelsMediaFeedResponseLocation;
  story_hashtags?: ReelsMediaFeedResponseHashtagItem[];
  creative_config?: ReelsMediaFeedResponseCreativeConfig;
  story_app_attribution?: ReelsMediaFeedResponseAppAttribution;
  story_music_stickers?: ReelsMediaFeedResponseMusicStickers[];
}
export interface ReelsMediaFeedResponseStoryPollsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  poll_sticker: ReelsMediaFeedResponsePollSticker;
}
export interface ReelsMediaFeedResponsePollSticker {
  id: string;
  poll_id: number;
  question: string;
  tallies: ReelsMediaFeedResponseTalliesItem[];
  promotion_tallies: null;
  viewer_can_vote: boolean;
  viewer_vote?: number;
  is_shared_result: boolean;
  finished: boolean;
}
export interface ReelsMediaFeedResponseTalliesItem {
  text: string;
  font_size?: number;
  count: number;
}
export interface ReelsMediaFeedResponseStoryQuestionsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  question_sticker: ReelsMediaFeedResponseQuestionSticker;
}
export interface ReelsMediaFeedResponseQuestionSticker {
  question_type: string;
  question_id: number;
  question: string;
  media_id: number;
  text_color: string;
  background_color: string;
  viewer_can_interact: boolean;
  profile_pic_url: string;
}
export interface ReelsMediaFeedResponseStoryQuizsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  quiz_sticker: ReelsMediaFeedResponseQuizSticker;
}
export interface ReelsMediaFeedResponseQuizSticker {
  id: string;
  quiz_id: number;
  question: string;
  tallies: ReelsMediaFeedResponseTalliesItem[];
  correct_answer: number;
  viewer_can_answer: boolean;
  finished: boolean;
  text_color: string;
  start_background_color: string;
  end_background_color: string;
  viewer_answer?: number;
}
export interface ReelsMediaFeedResponseStorySlidersItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  slider_sticker: ReelsMediaFeedResponseSliderSticker;
}
export interface ReelsMediaFeedResponseSliderSticker {
  slider_id: number;
  question: string;
  emoji: string;
  text_color: string;
  background_color: string;
  viewer_can_vote: boolean;
  slider_vote_average: null;
  slider_vote_count: number;
  viewer_vote?: number;
}

export interface ReelsMediaFeedResponseStoryCountdownsItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  countdown_sticker: ReelsMediaFeedResponseCountdown_sticker;
}
export interface ReelsMediaFeedResponseCountdown_sticker {
  countdown_id: number;
  end_ts: number;
  text: string;
  text_color: string;
  start_background_color: string;
  end_background_color: string;
  digit_color: string;
  digit_card_color: string;
  following_enabled: boolean;
  is_owner: boolean;
  attribution: null;
  viewer_is_following: boolean;
}
export interface ReelsMediaFeedResponseImageVersions2 {
  candidates: ReelsMediaFeedResponseCandidatesItem[];
}
export interface ReelsMediaFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
}
export interface ReelsMediaFeedResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
export interface ReelsMediaFeedResponseReelMentionsItem {
  x: string;
  y: string;
  z: number;
  width: string;
  height: string;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  user: ReelsMediaFeedResponseUser;
}
export interface ReelsMediaFeedResponseStoryCtaItem {
  cta_type: string;
  links: ReelsMediaFeedResponseLinksItem[];
}
export interface ReelsMediaFeedResponseLinksItem {
  linkType: number;
  webUri: string;
  androidClass: string;
  package: string;
  deeplinkUri: string;
  callToActionTitle: string;
  redirectUri: null;
  leadGenFormId: string;
  igUserId: string;
  appInstallObjectiveInvalidationBehavior: null;
}
export interface ReelsMediaFeedResponseFeedMedia {
  x: string;
  y: string;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  is_fb_sticker: number;
  media_id: string;
  product_type: string;
  media_code: string;
}
export interface ReelsMediaFeedResponseStoryLocation {
  x: string;
  y: string;
  z: number;
  width: string;
  height: string;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  is_fb_sticker: number;
  location: ReelsMediaFeedResponseLocation;
}
export interface ReelsMediaFeedResponseLocation {
  pk: number;
  short_name: string;
  facebook_places_id: number;
  external_source: string;
  name: string;
  address: string;
  city: string;
  has_viewer_saved: boolean;
  lng: number;
  lat: number;
  is_eligible_for_guides: boolean;
}
export interface ReelsMediaFeedResponseHashtagItem {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  is_fb_sticker: number;
  hashtag: ReelsMediaFeedResponseHashtag;
}
export interface ReelsMediaFeedResponseHashtag {
  name: string;
  id: number;
}
export interface ReelsMediaFeedResponseCreativeConfig {
  camera_facing: string;
  capture_type: string;
  should_render_try_it_on: boolean;
  effect_ids?: number[];
  face_effect_id?: number;
  persisted_effect_metadata_json?: string;
  failure_reason?: string;
  effect_preview: ReelsMediaFeedResponseCreativeConfigEffect;
  effect_configs: ReelsMediaFeedResponseCreativeConfigEffect[];
}
export interface ReelsMediaFeedResponseCreativeConfigEffect {
  name: string;
  id: string;
  failure_reason?: string;
  failure_code?: string;
  gatekeeper: string; // Unknown
  gatelogic: string; // Unknown
  attribution_user_id: string;
  attribution_user: ReelsMediaFeedResponseEffectUser;
  save_status: string;
  effect_actions: string[];
  is_spot_recognition_effect?: boolean;
  is_spot_effect?: boolean;
  thumbnail_image: { uri: string };
  effect_action_sheet: { primary_actions: string[]; secondary_actions: string[] };
  device_position: string; // Unknown
  fan_club?: string; // Unknown
}
export interface ReelsMediaFeedResponseEffectUser {
  instagram_user_id: string;
  username: string;
  profile_picture: { uri: string };
}
export interface ReelsMediaFeedResponseAppAttribution {
  app_action_text: string;
  app_icon_url: string;
  content_url: string;
  preview_url: string;
  id: number;
  link: string;
  name: string;
}
export interface ReelsMediaFeedResponseMusicStickers {
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
  is_pinned: number;
  is_hidden: number;
  is_sticker: number;
  is_fb_sticker: number;
  music_asset_info: ReelsMediaFeedResponseMusicAssetInfo;
}
export interface ReelsMediaFeedResponseMusicAssetInfo {
  audio_cluster_id: string;
  id: string;
  title: string;
  subtitle: string;
  display_artist: string;
  artist_id: string; // Unknown
  cover_artwork_uri: string;
  cover_artwork_thumbnail_uri: string;
  progressive_download_url: string;
  fast_start_progressive_download_url: string;
  web_30s_preview_download_url: string; // Unknown
  reactive_audio_download_url: string; // Unknown
  highlight_start_times_in_ms: number[];
  is_explicit: boolean;
  dash_manifest: string;
  has_lyrics: boolean;
  audio_asset_id: string;
  duration_in_ms: number;
  dark_message: string;
  allows_saving: boolean;
  territory_validity_periods: {};
  ig_artist: ReelsMediaFeedResponseMusicArtist;
  placeholder_profile_pic_url: string;
  should_mute_audio: boolean;
  should_mute_audio_reason: string;
  should_mute_audio_reason_type: string; // Unknown
  is_bookmarked: boolean;
  overlap_duration_in_ms: number;
  audio_asset_start_time_in_ms: number;
  allow_media_creation_with_music: boolean; // Unknown
  is_trending_in_clips: boolean;
  formatted_clips_media_count: number; // Unknown
  streaming_services: string; // Unknown
  display_labels: string; // Unknown
}
export interface ReelsMediaFeedResponseMusicArtist {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  follow_friction_type: boolean;
}
