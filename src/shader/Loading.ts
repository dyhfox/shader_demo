class Loading extends BaseEuiView {
    constructor() {
        super();
    }


    protected initUI(){
        const content = new eui.Image('bg_jpg');
        const stage = egret.MainContext.instance.stage;
        content.width = stage.stageWidth;
        content.height = stage.stageHeight;
        this.addChild(content);
        this.initShader(content);
        
    }

    private initShader(content: egret.DisplayObject){
        let customFilter = new egret.CustomFilter(getShader(ShaderConstant.VERTEX),getShader(ShaderConstant.F_MVP),{
            iTime:0,
            ratio: 1334/750
        });
        content.filters = [customFilter];
        egret.startTick((timeStamp) => {
            customFilter.uniforms.iTime += 0.01;
            return false;
        }, this)
    }
}