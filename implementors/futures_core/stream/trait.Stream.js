(function() {var implementors = {};
implementors["futures_channel"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.Receiver.html\" title=\"struct futures_channel::mpsc::Receiver\">Receiver</a>&lt;T&gt;",synthetic:false,types:["futures_channel::mpsc::Receiver"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.UnboundedReceiver.html\" title=\"struct futures_channel::mpsc::UnboundedReceiver\">UnboundedReceiver</a>&lt;T&gt;",synthetic:false,types:["futures_channel::mpsc::UnboundedReceiver"]},];
implementors["futures_core"] = [];
implementors["tokio_codec"] = [{text:"impl&lt;T, U&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_codec/struct.Framed.html\" title=\"struct tokio_codec::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"tokio_codec/trait.Decoder.html\" title=\"trait tokio_codec::Decoder\">Decoder</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>",synthetic:false,types:["tokio_codec::framed::Framed"]},{text:"impl&lt;T, D&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_codec/struct.FramedRead.html\" title=\"struct tokio_codec::FramedRead\">FramedRead</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"tokio_codec/trait.Decoder.html\" title=\"trait tokio_codec::Decoder\">Decoder</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>",synthetic:false,types:["tokio_codec::framed_read::FramedRead"]},{text:"impl&lt;T, D&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_codec/struct.FramedWrite.html\" title=\"struct tokio_codec::FramedWrite\">FramedWrite</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>",synthetic:false,types:["tokio_codec::framed_write::FramedWrite"]},];
implementors["tokio_fs"] = [{text:"impl <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_fs/struct.ReadDir.html\" title=\"struct tokio_fs::ReadDir\">ReadDir</a>",synthetic:false,types:["tokio_fs::read_dir::ReadDir"]},];
implementors["tokio_net"] = [{text:"impl&lt;C:&nbsp;<a class=\"trait\" href=\"tokio_codec/decoder/trait.Decoder.html\" title=\"trait tokio_codec::decoder::Decoder\">Decoder</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_net/udp/struct.UdpFramed.html\" title=\"struct tokio_net::udp::UdpFramed\">UdpFramed</a>&lt;C&gt;",synthetic:false,types:["tokio_net::udp::frame::UdpFramed"]},{text:"impl <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_net/uds/struct.Incoming.html\" title=\"struct tokio_net::uds::Incoming\">Incoming</a>",synthetic:false,types:["tokio_net::uds::incoming::Incoming"]},];
implementors["tokio_sync"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/struct.Receiver.html\" title=\"struct tokio_sync::mpsc::Receiver\">Receiver</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::bounded::Receiver"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_sync/mpsc/struct.UnboundedReceiver.html\" title=\"struct tokio_sync::mpsc::UnboundedReceiver\">UnboundedReceiver</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::unbounded::UnboundedReceiver"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_sync/watch/struct.Receiver.html\" title=\"struct tokio_sync::watch::Receiver\">Receiver</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::watch::Receiver"]},];
implementors["tokio_timer"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/delay_queue/struct.DelayQueue.html\" title=\"struct tokio_timer::delay_queue::DelayQueue\">DelayQueue</a>&lt;T&gt;",synthetic:false,types:["tokio_timer::delay_queue::DelayQueue"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/throttle/struct.Throttle.html\" title=\"struct tokio_timer::throttle::Throttle\">Throttle</a>&lt;T&gt;",synthetic:false,types:["tokio_timer::throttle::Throttle"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/timeout/struct.Timeout.html\" title=\"struct tokio_timer::timeout::Timeout\">Timeout</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a>,&nbsp;</span>",synthetic:false,types:["tokio_timer::timeout::Timeout"]},{text:"impl <a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/struct.Interval.html\" title=\"struct tokio_timer::Interval\">Interval</a>",synthetic:false,types:["tokio_timer::interval::Interval"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()