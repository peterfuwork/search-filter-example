import React from 'react';

const SortByIngredients = (props) => {
  return (
    <div className="checkboxes">
      <fieldset className="fieldset">
        <legend>選擇你的食材</legend>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="肉" name="肉" value="肉" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="肉">肉</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/ecskqpou2funsy1/IMG_0149.PNG?raw=1" alt="肉" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="水果" name="水果" value="水果" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="水果">水果</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/jw56sq2aolkjrf2/IMG_0153.png?raw=1" alt="水果" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="蔬菜" name="蔬菜" value="蔬菜" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="蔬菜">蔬菜</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/4ld3k5zimguitg6/IMG_0151.png?raw=1" alt="蔬菜" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="麵粉" name="麵粉" value="麵粉" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="麵粉">麵粉</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/ma2ifpi55fj4wni/IMG_0152.png?raw=1" alt="麵粉" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="冰塊" name="冰塊" value="冰塊" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="冰塊">冰塊</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/61qt0v8n4fosur9/IMG_0168.png?raw=1" alt="冰塊" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="蘑菇" name="蘑菇" value="蘑菇" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="蘑菇">蘑菇</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/ieda193zyug6348/IMG_0155.png?raw=1" alt="蘑菇" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="蜂蜜" name="蜂蜜" value="蜂蜜" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="蜂蜜">蜂蜜</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/uvrkex6rc3lu6rf/IMG_0156.png?raw=1" alt="蜂蜜" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="牛奶" name="牛奶" value="牛奶" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="牛奶">牛奶</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/g3zk9py08l3z8bp/IMG_0157.png?raw=1" alt="牛奶" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="魚類" name="魚類" value="魚類" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="魚類">魚類</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/tp0llv635rh87vt/IMG_0175.png?raw=1" alt="魚類" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="特定海鮮類" name="特定海鮮類" value="特定海鮮類" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="特定海鮮類">特定海鮮類</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/naobzg2geqde9z9/IMG_0262.png?raw=1" alt="特定海鮮類" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="草莓" name="草莓" value="草莓" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="草莓">草莓</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/qg4j3hyld168u4t/IMG_0150.png?raw=1" alt="草莓" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="松茸" name="松茸" value="松茸" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="松茸">松茸</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/0w3x2idqtgiy4uh/IMG_0154.png?raw=1" alt="松茸" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="胡蘿蔔" name="胡蘿蔔" value="胡蘿蔔" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="胡蘿蔔">胡蘿蔔</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/xdnz3aw69ec08rj/IMG_0177.png?raw=1" alt="胡蘿蔔" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="藍莓" name="藍莓" value="藍莓" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="藍莓">藍莓</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/g98v5dx6mh9w6kz/IMG_0159.png?raw=1" alt="藍莓" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="玉米" name="玉米" value="玉米" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="玉米">玉米</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/iz6pxqekilsk1er/IMG_0160.png?raw=1" alt="玉米" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="朝天椒" name="朝天椒" value="朝天椒" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="朝天椒">朝天椒</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/gej7kmsstjy3kwm/IMG_0178.png?raw=1" alt="朝天椒" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="禽蛋" name="禽蛋" value="禽蛋" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="禽蛋">禽蛋</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/j99njq5v4076138/IMG_0161.png?raw=1" alt="禽蛋" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="椰子" name="椰子" value="椰子" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="椰子">椰子</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/41x9nsnvxnxqimw/IMG_0176.png?raw=1" alt="椰子" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="西瓜" name="西瓜" value="西瓜" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="西瓜">西瓜</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/yng1ez62f94e1lp/IMG_0162.png?raw=1" alt="西瓜" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="南瓜" name="南瓜" value="南瓜" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="南瓜">南瓜</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/y36jb9ez73w9r5t/IMG_0163.png?raw=1" alt="南瓜" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="大米" name="大米" value="大米" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="大米">大米</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/ylnki4wam6y9s4g/IMG_0164.png?raw=1" alt="大米" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="醬料" name="醬料" value="醬料" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="醬料">醬料</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/takyztq5hfgv0yv/IMG_0169.png?raw=1" alt="醬料" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="調料" name="調料" value="調料" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="調料">調料</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/4xxc4qspcu13etu/IMG_0170.png?raw=1" alt="調料" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="鳳梨" name="鳳梨" value="鳳梨" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="鳳梨">鳳梨</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/q5bqaczlk1a6jwh/IMG_0165.png?raw=1" alt="鳳梨" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="蔥薑蒜" name="蔥薑蒜" value="蔥薑蒜" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="蔥薑蒜">蔥薑蒜</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/6qfil1xajro9vtn/IMG_0166.png?raw=1" alt="蔥薑蒜" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="動物內臟" name="動物內臟" value="動物內臟" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="動物內臟">動物內臟</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/9ylgdqvy2yejeq3/IMG_0167.png?raw=1" alt="動物內臟" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="食用油" name="食用油" value="食用油" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="食用油">食用油</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/8xcvnhcntqsu8d1/IMG_0171.png?raw=1" alt="食用油" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="豆腐" name="豆腐" value="豆腐" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="豆腐">豆腐</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/fanb5zs37tnh4h8/IMG_0172.png?raw=1" alt="豆腐" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="粉絲" name="粉絲" value="粉絲" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="粉絲">粉絲</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/0dcp8kglafviz9d/IMG_0174.png?raw=1" alt="粉絲" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="糖" name="糖" value="糖" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="糖">糖</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/4hav6lwnneuwep4/IMG_0173.png?raw=1" alt="糖" />
        </div>

        <div className="ingredient-checkbox">
          <input className="checkbox" type="checkbox" id="特殊備註" name="特殊備註" value="特殊備註" onChange={(e) => props.onHandleChangeIngredients(e)} />
          <label className="ingredient-label" htmlFor="特殊備註">特殊備註</label>&nbsp;
                  <img className="ingredient-image" src="https://www.dropbox.com/s/7p7ex722tbl6heq/IMG_0263.png?raw=1" alt="特殊備註" />
        </div>

        <div className="deselect-checkbox">
          <input className="checkbox" type="checkbox" id="取消所有選取" name="取消所有選取" value="取消所有選取" onChange={() => props.resetAllCheckboxes()} />
          <label className="ingredient-label" htmlFor="取消所有選取">取消所有選取</label>&nbsp;
        </div>

      </fieldset>
    </div>
  );
}
export default SortByIngredients;