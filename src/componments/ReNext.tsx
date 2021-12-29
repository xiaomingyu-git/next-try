import BpmnModeler from 'bpmn-js/lib/Modeler';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/index';
import nextb from "../utils/nextb";
import {useEffect} from "react";

function ReNext() {
	
	let bpmnModeler = null;
	
	useEffect(() => {
		bpmnModeler = new BpmnModeler({
			container: '#canvas', // 这里为数组的第一个元素
			height: '100vh',
		});
		
		createBpmnDiagram();
	}, [])
	
	const initBpmn = () => {
		bpmnModeler = new BpmnModeler({
			container: '#canvas', // 这里为数组的第一个元素
			height: '100vh',
			//添加控制板
			propertiesPanel: {
				parent: '.properties-panel'
			},
			additionalModules: [
				// 左边工具栏以及节点
				propertiesPanelModule,
				propertiesProviderModule
			],
			moddleExtensions: {
				camunda: camundaModdleDescriptor
			}
		});
		
		createBpmnDiagram();
	}
	
	const createBpmnDiagram = async () => {
		// 开始绘制出事bpmn的图
		try {
			const result = await bpmnModeler.importXML(nextb);
			console.log(result);
		} catch(error) {
			console.error(error)
		}
	}
	
	return (
		<div className="App">
			{/* bpmn容器 */}
			<div id="canvas" className="container"></div>
		</div>
	);
}

export default ReNext;

