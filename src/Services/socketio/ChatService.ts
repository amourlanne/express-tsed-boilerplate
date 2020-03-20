import {IO, Namespace, Socket, SocketService} from "@tsed/socketio";
import SocketIO from "socket.io";
import {SocketSession} from "@tsed/socketio/lib/decorators/socketSession";

@SocketService()
export class ChatService {

  @Namespace nsp: Namespace;

  constructor(@IO private io: SocketIO.Server) {
  }

  /**
   * Triggered the namespace is created
   */
  $onNamespaceInit(nsp: SocketIO.Namespace) {

  }

  /**
   * Triggered when a new client connects to the Namespace.
   */
  $onConnection(@Socket socket: SocketIO.Socket, @SocketSession session: SocketSession) {
    console.log('a user connected');
  }

  /**
   * Triggered when a client disconnects from the Namespace.
   */
  $onDisconnect(@Socket socket: SocketIO.Socket) {

  }
}
