export default function ArchitectureDiagram() {
  return (
    <div className="my-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
      <svg
        viewBox="0 0 1000 700"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
          </marker>
          <marker
            id="arrowhead-green"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
          <marker
            id="arrowhead-purple"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
          </marker>
        </defs>

        {/* Title */}
        <text
          x="500"
          y="30"
          textAnchor="middle"
          className="fill-slate-800 text-xl font-bold"
        >
          Harpy.js Architecture Flow
        </text>

        {/* CLIENT REQUEST */}
        <g>
          <circle cx="100" cy="100" r="40" fill="#3b82f6" opacity="0.2" />
          <circle cx="100" cy="100" r="35" fill="#3b82f6" />
          <text
            x="100"
            y="105"
            textAnchor="middle"
            className="fill-white text-sm font-semibold"
          >
            Browser
          </text>
          <text
            x="100"
            y="155"
            textAnchor="middle"
            className="fill-slate-600 text-xs"
          >
            GET /docs/page
          </text>
        </g>

        {/* Arrow 1: Client to Fastify */}
        <line
          x1="140"
          y1="100"
          x2="220"
          y2="100"
          stroke="#3b82f6"
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
        />
        <text
          x="180"
          y="90"
          textAnchor="middle"
          className="fill-blue-600 text-xs font-medium"
        >
          HTTP Request
        </text>

        {/* FASTIFY SERVER */}
        <g>
          <rect
            x="220"
            y="60"
            width="140"
            height="80"
            rx="8"
            fill="#f59e0b"
            opacity="0.2"
          />
          <rect x="225" y="65" width="130" height="70" rx="6" fill="#f59e0b" />
          <text
            x="290"
            y="95"
            textAnchor="middle"
            className="fill-white text-sm font-semibold"
          >
            Fastify
          </text>
          <text
            x="290"
            y="115"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            Server
          </text>
        </g>

        {/* Arrow 2: Fastify to NestJS */}
        <line
          x1="360"
          y1="100"
          x2="440"
          y2="100"
          stroke="#3b82f6"
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
        />

        {/* NESTJS + HARPY */}
        <g>
          <rect
            x="440"
            y="40"
            width="160"
            height="120"
            rx="8"
            fill="#e11d48"
            opacity="0.2"
          />
          <rect x="445" y="45" width="150" height="110" rx="6" fill="#e11d48" />
          <text
            x="520"
            y="75"
            textAnchor="middle"
            className="fill-white text-sm font-semibold"
          >
            NestJS
          </text>
          <text
            x="520"
            y="95"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            + Harpy Controller
          </text>
          <text
            x="520"
            y="115"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            @JsxRender()
          </text>
          <text
            x="520"
            y="135"
            textAnchor="middle"
            className="fill-white text-xs font-bold"
          >
            Route Handler
          </text>
        </g>

        {/* Arrow 3: NestJS to React SSR */}
        <line
          x1="520"
          y1="160"
          x2="520"
          y2="220"
          stroke="#3b82f6"
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
        />
        <text
          x="545"
          y="195"
          textAnchor="start"
          className="fill-blue-600 text-xs font-medium"
        >
          Invoke
        </text>

        {/* REACT SSR ENGINE */}
        <g>
          <rect
            x="420"
            y="220"
            width="200"
            height="100"
            rx="8"
            fill="#06b6d4"
            opacity="0.2"
          />
          <rect x="425" y="225" width="190" height="90" rx="6" fill="#06b6d4" />
          <text
            x="520"
            y="250"
            textAnchor="middle"
            className="fill-white text-sm font-semibold"
          >
            React SSR Engine
          </text>
          <text
            x="520"
            y="270"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            renderToString()
          </text>
          <text
            x="520"
            y="290"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            Server Components +
          </text>
          <text
            x="520"
            y="305"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            Client Components
          </text>
        </g>

        {/* Arrow 4: React to Hydration Builder */}
        <line
          x1="620"
          y1="270"
          x2="700"
          y2="270"
          stroke="#10b981"
          strokeWidth="3"
          markerEnd="url(#arrowhead-green)"
        />
        <text
          x="660"
          y="260"
          textAnchor="middle"
          className="fill-green-600 text-xs font-medium"
        >
          Detect
        </text>

        {/* HYDRATION CHUNK BUILDER */}
        <g>
          <rect
            x="700"
            y="230"
            width="180"
            height="80"
            rx="8"
            fill="#10b981"
            opacity="0.2"
          />
          <rect x="705" y="235" width="170" height="70" rx="6" fill="#10b981" />
          <text
            x="790"
            y="260"
            textAnchor="middle"
            className="fill-white text-sm font-semibold"
          >
            Hydration Builder
          </text>
          <text
            x="790"
            y="280"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            esbuild chunks
          </text>
          <text
            x="790"
            y="295"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            (client-*.js)
          </text>
        </g>

        {/* Arrow 5: Back to HTML generation */}
        <line
          x1="520"
          y1="320"
          x2="520"
          y2="390"
          stroke="#3b82f6"
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
        />
        <text
          x="545"
          y="360"
          textAnchor="start"
          className="fill-blue-600 text-xs font-medium"
        >
          Generate
        </text>

        {/* HTML WITH MARKERS */}
        <g>
          <rect
            x="400"
            y="390"
            width="240"
            height="120"
            rx="8"
            fill="#8b5cf6"
            opacity="0.2"
          />
          <rect
            x="405"
            y="395"
            width="230"
            height="110"
            rx="6"
            fill="#8b5cf6"
          />
          <text
            x="520"
            y="420"
            textAnchor="middle"
            className="fill-white text-sm font-semibold"
          >
            HTML Response
          </text>
          <text
            x="520"
            y="440"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            &lt;div data-harpy-cid="xyz"&gt;
          </text>
          <text
            x="520"
            y="460"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            + &lt;script src="client-*.js"&gt;
          </text>
          <text
            x="520"
            y="480"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            + window.__harpy_props__
          </text>
        </g>

        {/* Arrow 6: HTML back to browser */}
        <line
          x1="400"
          y1="450"
          x2="180"
          y2="450"
          stroke="#8b5cf6"
          strokeWidth="3"
          markerEnd="url(#arrowhead-purple)"
        />
        <text
          x="290"
          y="440"
          textAnchor="middle"
          className="fill-purple-600 text-xs font-medium"
        >
          HTTP Response
        </text>

        {/* BROWSER RECEIVES HTML */}
        <g>
          <rect
            x="40"
            y="410"
            width="140"
            height="80"
            rx="8"
            fill="#3b82f6"
            opacity="0.2"
          />
          <rect x="45" y="415" width="130" height="70" rx="6" fill="#3b82f6" />
          <text
            x="110"
            y="440"
            textAnchor="middle"
            className="fill-white text-sm font-semibold"
          >
            Browser
          </text>
          <text
            x="110"
            y="460"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            Renders HTML
          </text>
          <text
            x="110"
            y="475"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            (Static Content)
          </text>
        </g>

        {/* Arrow 7: Browser loads chunks */}
        <line
          x1="110"
          y1="490"
          x2="110"
          y2="560"
          stroke="#10b981"
          strokeWidth="3"
          markerEnd="url(#arrowhead-green)"
        />
        <text
          x="135"
          y="530"
          textAnchor="start"
          className="fill-green-600 text-xs font-medium"
        >
          Load JS
        </text>

        {/* CLIENT HYDRATION */}
        <g>
          <rect
            x="30"
            y="560"
            width="160"
            height="100"
            rx="8"
            fill="#10b981"
            opacity="0.2"
          />
          <rect x="35" y="565" width="150" height="90" rx="6" fill="#10b981" />
          <text
            x="110"
            y="590"
            textAnchor="middle"
            className="fill-white text-sm font-semibold"
          >
            Hydration
          </text>
          <text
            x="110"
            y="610"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            React.hydrateRoot()
          </text>
          <text
            x="110"
            y="630"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            Attach event handlers
          </text>
          <text
            x="110"
            y="645"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            Make interactive
          </text>
        </g>

        {/* INTERACTIVE APP */}
        <g>
          <rect
            x="250"
            y="560"
            width="160"
            height="100"
            rx="8"
            fill="#f59e0b"
            opacity="0.2"
          />
          <rect x="255" y="565" width="150" height="90" rx="6" fill="#f59e0b" />
          <text
            x="330"
            y="590"
            textAnchor="middle"
            className="fill-white text-sm font-semibold"
          >
            ✨ Interactive
          </text>
          <text
            x="330"
            y="610"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            Full React App
          </text>
          <text
            x="330"
            y="630"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            onClick, useState
          </text>
          <text
            x="330"
            y="645"
            textAnchor="middle"
            className="fill-white text-xs"
          >
            Client-side routing
          </text>
        </g>

        {/* Arrow 8: Hydration to Interactive */}
        <line
          x1="190"
          y1="610"
          x2="250"
          y2="610"
          stroke="#f59e0b"
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
          strokeDasharray="5,5"
        />

        {/* LEGEND */}
        <g>
          <text x="700" y="400" className="fill-slate-700 text-xs font-bold">
            Legend:
          </text>
          <circle cx="710" cy="420" r="6" fill="#3b82f6" />
          <text x="725" y="425" className="fill-slate-600 text-xs">
            Server-side processing
          </text>
          <circle cx="710" cy="445" r="6" fill="#10b981" />
          <text x="725" y="450" className="fill-slate-600 text-xs">
            Hydration mechanism
          </text>
          <circle cx="710" cy="470" r="6" fill="#8b5cf6" />
          <text x="725" y="475" className="fill-slate-600 text-xs">
            HTML output
          </text>
          <circle cx="710" cy="495" r="6" fill="#f59e0b" />
          <text x="725" y="500" className="fill-slate-600 text-xs">
            Client interactivity
          </text>
        </g>

        {/* KEY CONCEPTS BOXES */}
        <g>
          <text
            x="500"
            y="680"
            textAnchor="middle"
            className="fill-slate-700 text-xs font-bold"
          >
            Key: Fast initial load (SSR) + Progressive enhancement (Hydration) =
            Best UX
          </text>
        </g>
      </svg>
    </div>
  );
}
