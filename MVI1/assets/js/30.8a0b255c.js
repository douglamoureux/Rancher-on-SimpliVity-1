(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{402:function(e,t,a){"use strict";a.r(t);var l=a(35),o=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"redeployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redeployment"}},[e._v("#")]),e._v(" Redeployment")]),e._v(" "),a("p",[e._v("The playbook "),a("code",[e._v("playbooks/clean.yml")]),e._v(" is a convenience playbook for stripping down a cluster. This can be very useful\nin a proof-of-concept environment, where you may want to regularly tear down and re-deploy your test cluster.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Set the value of the variable "),a("code",[e._v("delete_templates")]),e._v(" to "),a("code",[e._v("false")]),e._v(" if you don't want your templates to be deleted")])]),e._v(" "),a("li",[a("p",[e._v("Run the playbook "),a("code",[e._v("playbooks/clean.yml")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~/Rancher-on-SimpliVity\n\n$ ansible-playbook -i hosts playbooks/clean.yml --vault-password-file .vault_pass\n")])])])])]),e._v(" "),a("p",[e._v("The playbook will delete VMs and templates.")])])}),[],!1,null,null,null);t.default=o.exports}}]);