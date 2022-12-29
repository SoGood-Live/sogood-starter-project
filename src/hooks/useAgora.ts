import { useState, useEffect, useRef } from "react";
import AgoraRTC, {
  IAgoraRTCClient,
  IAgoraRTCRemoteUser,
  MicrophoneAudioTrackInitConfig,
  CameraVideoTrackInitConfig,
  IMicrophoneAudioTrack,
  ICameraVideoTrack,
  ILocalVideoTrack,
  ILocalAudioTrack,
} from "agora-rtc-sdk-ng";

/**
 * This is some sample boilerplate for getting Agora setup. Use as much or as little of this as you like!
 * @param role : whether this agora client joins as a host or audience member
 */
const useAgora = (role: "HOST" | "AUDIENCE") => {

  // You can hardcode client, appId, and token values here in state

  const client = useRef<IAgoraRTCClient>();

  const [localVideoTrack, setLocalVideoTrack] = useState<ILocalVideoTrack | undefined>(undefined);
  const [localAudioTrack, setLocalAudioTrack] = useState<ILocalAudioTrack | undefined>(undefined);

  const [joinState, setJoinState] = useState(false);
  const [remoteUsers, setRemoteUsers] = useState<IAgoraRTCRemoteUser[]>([]);

  useEffect(() => {
    // subscribe to certain channel events here 
    // what else should run when this hook mounts?

  }, []);

  // Some suggestions vv 

  // async function createLocalTracks() : Promise<void> {}

  // async function join() : Promise<void> {
  //   if(role === "HOST") {}
  //   else {}
    
  // }
  // async function leave() : Promise<void> {}

};

export default useAgora;
